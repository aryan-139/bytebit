import React, { useRef, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';
import background from './assets/background.jpg';

function App() {
  const fileInputRef = useRef(null);
  const [mediaAdded, setMediaAdded]=useState(false);

  // Handle file input changes
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append('file', file);
      //for testing only 
      setMediaAdded(true);
      console.log('File uploaded successfully');

      const response = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // File uploaded successfully
        setMediaAdded(true);
        console.log('File uploaded successfully');
      } else {
        // Error occurred while uploading the file
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //Handle compress button
  function handleCompress() {
    console.log('Compress button clicked');
    fetch('http://localhost:3001/api/compress', {
      method: 'POST',
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
        // Handle the response from the server here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the API call
      });
  } 

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
        onChange={handleFileInputChange}
      />

      <Button onClick={handleButtonClick} sx={{ fontSize: "2rem"}}>
        Add Media
      </Button>
      {/**Display that the media is added successfully and a TICK MARK */}
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
          onClick={handleCompress}
          color="primary"
          component={Link}
          to="/compressed"
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
