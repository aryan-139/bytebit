import React from 'react';
import { Typography, Box, Button, Divider} from '@mui/material';
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
      <Divider></Divider>

      <Button startDecorator>Add Media</Button>
      <Typography variant="h12" align="center" sx={{ marginTop: '2rem' }}>Add your media file, in .txt, .docx format only</Typography>

      <Box sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
      
       <Button variant="contained" color="primary" component={Link} to="/compressed" sx={{ marginRight: '20px' }}>
        Compress
        </Button>
        {/* Decompress Button */}
        <Button variant="contained" color="primary" component={Link} to="/decompressed">
        Decompress
        </Button>
</Box>

    </Box>
  );
}

export default App;
