import React, { useRef, useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const fileInputRef = useRef(null);
  const [mediaAdded, setMediaAdded]=useState(false);

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

  const handleButtonClick = () => {
    // Trigger the hidden input element when the button is clicked
    fileInputRef.current.click();
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
      }}
    >
      <div id='header'>
        <Typography variant="h1" align="center" sx={{ marginTop: '5rem' }}>
          ByteBit
        </Typography>
        <Typography variant="h4" align="center" sx={{ marginTop: '2rem' }}>
          A simple file compression tool
        </Typography>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
      />

      <Button onClick={handleButtonClick}>
        Add Media
      </Button>
      {/**Display that the media is added successfully and a TICK MARK */}
      <div id='mediaAdded'>
        {mediaAdded && (
          <Typography variant="h12" color="green" align="center" sx={{ marginTop: '2rem' }}>
            Media added successfully
          </Typography>
        )}
      </div>

      <Typography variant="h12" align="center" sx={{ marginTop: '2rem' }}>
        Add your media file, in .txt, .docx format only
      </Typography>

      <Box sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
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
