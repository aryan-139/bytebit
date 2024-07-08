const fs=require('fs');

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
  
  module.exports = compressText;