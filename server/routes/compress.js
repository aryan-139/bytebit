const express = require('express');
const router = express.Router();
const cors=require('cors');

router.use(express.json());

router.post('/', (req, res) => {
  // Implement compression logic here
  // Check if media is added and extract text from attached docx or txt file
  // Perform Huffman compression on the text and store it somewhere
  // Respond with success message or appropriate error response
  receivedString = req.body.text;
  console.log(receivedString);
  setTimeout(() => {
    res.status(200).json({ parsedData: "Compressed data" });
    console.log('Compression route hit');
  }, 2000);
});

router.get('/download', (req, res) => {
  // Implement logic to serve the compressed media for download
});

module.exports = router;
