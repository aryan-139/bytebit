import React, { useRef, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import './App.css';
import { Link} from 'react-router-dom';
import background from './assets/background.jpg';
import handleFileInputChange from './api/fileInputHandler';
import { handleCompress } from './api/compressHandler';
import CustomButton from './components/CustomButtonHelper';
import sampleData from './data';

function App() {
  const fileInputRef = useRef(null);
  const [mediaAdded, setMediaAdded]=useState(false);
  const [data, setData] = useState(null);
  
 function handleDownloadSampleClick(){
    const element = document.createElement("a");
    const file = new Blob([sampleData], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "sample.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Handle file input changes
  const handleFileInput = async (e) => {
    const newData = await handleFileInputChange(e, setMediaAdded);
    if (newData) {
      setData(newData); // Set the "data" state with the parsed data
    }
  };
  //here the data is updated now
  //console.log(data);

  // Handle the compress button click
  const handleCompressButtonClick = async () => {
    const parsedData = await handleCompress(data, mediaAdded);
    if (parsedData) {
      //console.log(parsedData);
      window.localStorage.setItem('compressedData',JSON.stringify(parsedData));
      window.location.href = '/compressed';
    }
    else{
      console.log("error");
    }
  };
  
  //Handle the decompress button click

 

  const handleButtonClick = () => {
    // Trigger the hidden input element when the button is clicked
    fileInputRef.current.click();
  };

  return (
    
    <Box
      sx={{
        backgroundImage: `url(${background})`, // Set the background image here
        backgroundSize: 'cover', // Adjust the background image size
        backgroundPosition: 'center', // Center the background image
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '86vh',
      }}
    >
      <div id='header'>
        <Typography variant="h1" align="center" color="white" sx={{ marginTop: '0.5rem', fontSize: "12rem" }}>
          ByteBit
        </Typography>
        <Typography variant="h3" align="center" color="white" sx={{ marginTop: '0.5rem' }}>
          A simple file compressor 
        </Typography>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />

      <Button onClick={handleButtonClick} sx={{ fontSize: "1.8rem"}}>
        Add Media
      </Button>
      {/**Display that the media is added successfully*/}
      <div id='mediaAdded'>
        {mediaAdded && (
          <Typography variant="h12" color="green" align="center" sx={{ marginTop: '0.1rem', fontSize:"1.2rem" }}>
            Media added successfully
          </Typography>
        )}
      </div>

      <Typography variant="h12" align="center" color="white" sx={{ marginTop: '0.1rem' }}>
        Add your media file, in .txt, .docx format only
      </Typography>
      <Typography
      variant="h12"
      align="center"
      color="orange"
      sx={{ marginTop: '0.1rem', textDecoration: 'underline', cursor: 'pointer' }}
      component="a"
      onClick={handleDownloadSampleClick}
    >
      Download your sample file here.
    </Typography>

      <Box sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
      <CustomButton
        variant="contained"
        onClick={handleCompressButtonClick}
        color="primary"
        sx={{ marginRight: '20px' }}
      >
        Compress
      </CustomButton>
      <CustomButton
        variant="contained"
        color="primary"
        component={Link}
        to="/decompressed"
      >
        Decompress
      </CustomButton>
      </Box>
      
      {/**Copyright text */}
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: '6rem' }}>
          © {new Date().getFullYear()} Aryan Raj. All rights reserved.
        </Typography>
    </Box>
  );
}

export default App;
