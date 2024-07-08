const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(express.json());
const {getWordCount, getCharCount,getTokenCount,vocabularySize,compressionRatio,timeToCompress,downloadCompressedFile}= require('../utils/textUtil'); 
const {compressText,decompressText}= require('../utils/textCompression');

var data=null;
var compressedDataGlobal=null;
const compressedArray=[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 270, null, null, null, null, null, 259, null, null, null, null, null, null, null, 268, 273, 273, null, null, null, null, null, null, 261, 263, 284, null, null, 269, null, 295, 262, 264, 285, null, 294, null, null, null, null, null, null, null, null, null, null, 260, 304, 278, null, null, 306, 308, null, null, null, null, 322, 285]

// Define the route to receive the data from the client
router.post('/', (req, res) => {
  data=req.body.data;
  console.log("received the data");
});

router.get('/details',async (req,res)=>{
  // console.log(data);
  const wordCount= await getWordCount(data);  
  const charCount= await getCharCount(data);
  const tokenCount= await getTokenCount(data);
  const vocabulary= await vocabularySize(data);
  const compressedData= await compressText(data);
  const compressionRatioValue= await compressionRatio(data,compressedData);
  const timeToCompressValue= await timeToCompress(data);
  const decompressedtext= await decompressText(compressedData);
  
  compressedDataGlobal=compressedData;


  //create the response object
  const responseData={
    data: data,
    wordCount: wordCount,
    charCount: charCount,
    tokenCount: tokenCount,
    vocabularySize: vocabulary,
    compressedData: compressedData,
    compressionRatio: compressionRatioValue,
    timeToCompress: timeToCompressValue,
    decompressedtext: decompressedtext
  }
  console.log(responseData);
  res.json(responseData);

  // res.json(responseData);
});

router.get('/download', (req, res) => {
  downloadCompressedFile(data,res);
  res.send('File downloaded');
});

module.exports = router;
