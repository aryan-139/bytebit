import React, { useRef, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import handleFileInputChange from './api/fileInputHandler';
import { handleCompress } from './api/compressHandler';

function App() {
  const fileInputRef = useRef(null);
  const [mediaAdded, setMediaAdded]=useState(false);
  const navigate = useNavigate();

  // Handle file input changes
  const handleFileInput=(e) => {
    handleFileInputChange(e, setMediaAdded);
  };

  // Handle the compress button click
  const handleCompressButtonClick = async () => {
    const parsedData = await handleCompress();
    if (parsedData) {
      // Successfully received parsed data, navigate to the compressed page
      navigate('/compressed');
    } else {
      // Handle the case where the server response doesn't contain the expected data
      console.error('Error: Invalid Response from the server');
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
        <Typography variant="h1" align="center" sx={{ marginTop: '0.5rem', fontSize: "10rem" }}>
          ByteBit
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: '0.5rem' }}>
          A simple file compression software
        </Typography>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />

      <Button onClick={handleButtonClick} sx={{ fontSize: "2rem"}}>
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

      <Typography variant="h12" align="center" sx={{ marginTop: '0.1rem' }}>
        Add your media file, in .txt, .docx format only
      </Typography>

      <Box sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
          onClick={handleCompressButtonClick}
          color="primary"
          sx={{ marginRight: '20px' }}
        >
          Compress
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/decompressed"
        >
          Decompress
        </Button>
      </Box>
    </Box>
  );
}

export default App;
