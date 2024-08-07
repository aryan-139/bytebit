import { Box, CardContent, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../components/CustomButtonHelper';
import GradientBackground from '../components/GradientBackgroundWhite';
import { Card } from '@mui/material';
import JSZip from 'jszip';
const Compressed = () => {
  const compressed=JSON.parse(window.localStorage.getItem('compressedData'));
  
  const apiText = compressed.data;
  const sampleData = [
    { title: 'Word Count', values: compressed.wordCount },
    { title: 'Character Count', values: compressed.charCount },
    { title: 'Token Count', values: compressed.tokenCount },
    { title: 'Vocabulary Size', values: compressed.vocabularySize },
    { title: 'Compression Ratio', values: compressed.compressionRatio },
    { title: 'Time to Compress(in sec.)', values: compressed.timeToCompress },
    { title: 'Lossy Indicator', values: 'Lossless' },
    { title: 'Compression Type', values: 'LZW Compression' },
  ];

  //data compression-> array -> convert to blob -> zip -> download
  const handleDownloadButtonClick = async () => {
    const compressedDataArray=compressed.compressedData;
    const compressedU8 = new Uint8Array(compressedDataArray);
    const blob = new Blob([compressedU8], { type: "application/octet-stream" });
    const zip = new JSZip();
    zip.file("compressed.bin", blob);

    zip.generateAsync({ type: "blob" }).then(function (content) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "compressed.zip";
        link.click();
    });
   
  };

  return (
    <GradientBackground>
    <div>
      <Typography variant="h4" align="center" sx={{ marginTop: '0.5rem', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', letterSpacing: '2px' }}>
        Compressed
      </Typography>

      <Box sx={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField 
          id="outlined-multiline-static"
          label="Compressed Text"
          multiline
          rows={5}
          value={apiText}
          variant="outlined"
          sx={{ width: '80%', textAlign: 'center', marginBottom: '1rem' }}
        />
        {/**Download the compressed file*/}
        <CustomButton
        variant="contained"
        color="primary"
        sx={{ marginRight: '20px' }}
        onClick={handleDownloadButtonClick}
      >
      Download Compressed
      </CustomButton>
        
        
        <Divider sx={{ marginTop: '1rem', marginBottom: '1rem', width: '100%' }} />
        {/**Render 8 cards */}
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '1.2rem',
        marginLeft: '12rem', 
        marginRight: '12rem', 
        gap: '1rem', 
        padding: '2rem', 
      }}
    >
      {sampleData.map((item, index) => (
        <Card key={index} sx={{ width: 300, borderRadius: 1, boxShadow: 3 }}>
          <CardContent>
            {/* Customize the card content with the data */}
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1, justifyContent:"center" }}>
              {item.title}
            </Typography>
            <Typography color="textSecondary" sx={{ fontSize: 14 }}>
              {item.values}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>

           {/**Copyright text */}
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '2rem' }}>
          © {new Date().getFullYear()} Aryan Raj. All rights reserved.
        </Typography>

        
      </Box>
    </div>
    </GradientBackground>
  )
}

export default Compressed;
