const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

const port=3001;


//server is now running
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});
  
//middleware
app.use(bodyParser.json());
app.use(cors());

//routes

//define the media addition and compression routes here 

