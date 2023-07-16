import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Box
    //can add background here, just need to modify app-container a bit
      //className="app-container"
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
      <Typography variant="h1" align="center" sx={{ marginTop: '5rem' }}>
        ByteBit
      </Typography>
      <Typography variant="h4" align="center" sx={{ marginTop: '2rem' }}>
        A simple file compression tool
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <div className="media-clipper" />
        {/**Compress Button */}
        <Box sx={{ marginTop: '1rem' }}>
          <Button 
          variant="contained" 
          color="primary" 
          component={Link}
          to="/compressed"
          sx={{ marginRight: '20px' }}>
            Compress
          </Button>
          {/**Decompress Button */}
          <Button variant="contained" 
          color="primary"
          component={Link}
          to="/decompressed">
            Decompress
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
