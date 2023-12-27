const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(express.json());
const {getWordCount, getCharCount,getTokenCount,vocabularySize,compressText,compressionRatio,timeToCompress}= require('../utils/textUtil'); 

var data=null;

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
  


  //create the response object
  const responseData={
    data: data,
    wordCount: wordCount,
    charCount: charCount,
    tokenCount: tokenCount,
    vocabularySize: vocabulary,
    compressedData: compressedData,
    compressionRatio: compressionRatioValue,
    timeToCompress: timeToCompressValue
  }
  console.log(responseData);
  res.json(responseData);
});

router.get('/download', (req, res) => {
  // Implement logic to serve the compressed media for download
});

module.exports = router;
