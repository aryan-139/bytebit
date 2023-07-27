const express = require('express');
const router = express.Router();
const multer = require('multer');


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
    console.log(req.file);
    if (!req.file) {
      return res.status(400).json({ error: 'No file received' });
    }

    {/**Uncomment this code if you want to restrict the file types that can be uploaded*/} 

    // const allowedMimeTypes = ['text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    // if (!allowedMimeTypes.includes(req.file.mimetype)) {
    //   return res.status(400).json({ error: 'Invalid file format. Only .txt and .docx files are allowed.' });
    // }
  
    // You can now access the file details from req.file
    console.log('Received file:', req.file);
  
    // Perform any additional operations or pass the file to your compression logic here
    return res.status(200).json({ message: 'File uploaded successfully' });
  
});

module.exports = router;
