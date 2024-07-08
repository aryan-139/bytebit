const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs=require('fs');
const axios=require('axios');

var data=null;
//define the storage for the uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads/');
  },
  filename: function(req, file, cb){
      cb(null, file.originalname);
  },
});


// Create a multer instance and specify the storage configuration
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {
    //console.log(req.file);
    if (!req.file) {
      return res.status(400).json({ error: 'No file has been received' });
    } 
    console.log("file received");
  // Read the content of the uploaded media file (limitation: only .txt and .docx (text only) files are supported)
   const filePath = req.file.path;
    fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the file that was uploaded by the user' });
    }
    //console.log('File content:', data);
    
    //send the file content to the compression server
    axios.post('http://localhost:3001/api/compress', {
      data: data
    })


    res.status(200).json({ message: 'File uploaded successfully', content: data });
    

  });

  
  
    {/**Uncomment this code if you want to restrict the file types that can be uploaded*/} 

    // const allowedMimeTypes = ['text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    // if (!allowedMimeTypes.includes(req.file.mimetype)) {
    //   return res.status(400).json({ error: 'Invalid file format. Only .txt and .docx files are allowed.' });
    // }
  
  
    // Perform any additional operations or pass the file to your compression logic here
   
  
});

module.exports = router;
