const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const uploadRoute = require('./routes/upload');
const compressRoute = require('./routes/compress');
const decompressRoute = require('./routes/decompress');

const port=3001;


//server is now running
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
  
//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api/upload', uploadRoute);
app.use('/api/compress', compressRoute);
app.use('/api/compress/download', compressRoute);
app.use('/api/decompress', decompressRoute);

//define the media addition and compression routes here 



