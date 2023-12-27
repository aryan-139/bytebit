function getWordCount(text) {
    if (text == null) return 0;
    const words = text.split(' ');
    return words.length;
  }
  
  function getCharCount(text) {
    if (text == null) return 0;
    const chars = text.split('');
    return chars.length;
  }
  
  function vocabularySize(text) {
    if (text == null) return 0;
    const words = text.split(' ');
    const uniqueWords = [...new Set(words)];
    return uniqueWords.length;
  }
  
  function getTokenCount(text) {
    if (text == null) return 0;
    const tokens = text.split(/[ ,]+/);
    return tokens.length;
  }
  
  function compressText(originalText) {
    if (originalText == null) return null;
  
    let dictionary = {};
    let nextCode = 256;
    let result = [];
    let currentPhrase = originalText[0];
  
    for (let i = 1; i < originalText.length; i++) {
      const char = originalText[i];
      const phrase = currentPhrase + char;
  
      if (dictionary[phrase] !== undefined) {
        currentPhrase = phrase;
      } else {
        result.push(dictionary[currentPhrase]);
        dictionary[phrase] = nextCode++;
        currentPhrase = char;
      }
    }
  
    // Add the last code to the result
    result.push(dictionary[currentPhrase]);
  
    return result;
  }
  
  function compressionRatio(originalText, compressedText) {
    const originalSize = getCharCount(originalText);
    const compressedSize = compressedText.length; 
    return compressedSize / originalSize;
}

  function timeToCompress(originalText) {
    const startTime = Date.now();
    compressText(originalText);
    const endTime = Date.now();
    const timeInSeconds = (endTime - startTime) / 1000; 
    return timeInSeconds;
    }

  
  module.exports = { getWordCount, getCharCount, vocabularySize, getTokenCount, compressText, compressionRatio,timeToCompress };

  

// // LZW Decompression function
// function decompressText(compressedText) {
//     let dictionary = {};
//     let nextCode = 256;
//     let result = [];
//     let currentCode = compressedText[0].toString();

//     result.push(String.fromCharCode(currentCode));

//     for (let i = 1; i < compressedText.length; i++) {
//         const code = compressedText[i];

//         let phrase;
//         if (dictionary[code] !== undefined) {
//             phrase = dictionary[code];
//         } else if (code === nextCode) {
//             phrase = currentCode + currentCode[0];
//         } else {
//             throw new Error('Invalid compressed text');
//         }

//         result.push(phrase);

//         // Add the current code + phrase[0] to the dictionary
//         dictionary[nextCode++] = currentCode + phrase[0];

//         // Update the current code
//         currentCode = phrase;
//     }

//     return result.join('');
// }