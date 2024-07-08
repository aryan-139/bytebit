const fs=require('fs');

function compressText(uncompressed) {
    console.log("compress text hit");
    let dictSize = 256;
    let dictionary = {};
    for (let i = 0; i < 256; i++) {
        dictionary[String.fromCharCode(i)] = i;
    }

    let w = "";
    let result = [];
    for (let i = 0; i < uncompressed.length; i++) {
        let c = uncompressed.charAt(i);
        let wc = w + c;
        if (dictionary.hasOwnProperty(wc)) {
            w = wc;
        } else {
            result.push(dictionary[w]);
            // Add wc to the dictionary.
            dictionary[wc] = dictSize++;
            w = c;
        }
    }

    // Output the code for w.
    if (w !== "") {
        result.push(dictionary[w]);
    }
    // console.log(result.toString());
    return result;
  }

  function decompressText(compressed) {
    console.log("decompress text hit");
    console.log(compressed);
    
    if (compressed.length === 0) {
        throw new Error("Compressed data is empty.");
    }
    
    // Build the dictionary.
    let dictSize = 256;
    let dictionary = [];
    for (let i = 0; i < 256; i++) {
        dictionary[i] = String.fromCharCode(i);
    }

    let w = String.fromCharCode(compressed[0]);
    let result = w;
    for (let i = 1; i < compressed.length; i++) {
        let k = compressed[i];
        let entry;
        if (dictionary[k]) {
            entry = dictionary[k];
        } else if (k === dictSize) {
            entry = w + w.charAt(0);
        } else {
            return("invalid");
        }

        result += entry;

        // Add w+entry[0] to the dictionary.
        dictionary[dictSize++] = w + entry.charAt(0);

        w = entry;
    }

    return result;
}

  
  module.exports = {compressText, decompressText};

