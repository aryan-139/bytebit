import { Box, CardContent, Divider, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../components/CustomButtonHelper';
import GradientBackground from '../components/GradientBackgroundWhite';
import { Card } from '@mui/material';
import styled from 'styled-components';

const RoundedCard = styled(Card)`
  border-radius: 20px; // Adjust the value to control the roundness of the corners
  height: 125px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Compressed = () => {

  // This will contain the text received from the API endpoint
  const apiText = "This is the text received from the API.";
  const sampleData = [
    { title: 'Card 1', values: 'Description for Card 1' },
    { title: 'Card 2', values: 'Description for Card 2' },
    { title: 'Card 3', values: 'Description for Card 3' },
    { title: 'Card 4', values: 'Description for Card 4' },
    { title: 'Card 5', values: 'Description for Card 5' },
    { title: 'Card 6', values: 'Description for Card 6' },
    { title: 'Card 7', values: 'Description for Card 7' },
    { title: 'Card 8', values: 'Description for Card 8' },
  ];

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
      >
      Download Compressed
      </CustomButton>
        <Typography variant="h9" align="center" sx={{ marginTop: '1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', letterSpacing: '2px' }}>
          The download button will be disabled until the user uploads a file.
        </Typography>
        
        <Divider sx={{ marginTop: '1rem', marginBottom: '1rem', width: '100%' }} />
        {/**Render 8 cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '3rem', gap: '3rem', marginRight:'8rem', marginLeft:'8rem'}}>
        {sampleData.map((item, index) => (
          <RoundedCard key={index}>
            <CardContent>
              {/* Customize the card content with the data */}
              <Typography variant="h5" component="h2">
                 {item.title}
               </Typography>
               <Typography color="textSecondary">
                 {item.values}
               </Typography>
             </CardContent>
           </RoundedCard>
           ))}
          </Box>

           {/**Copyright text */}
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '6rem' }}>
          © {new Date().getFullYear()} Aryan Raj. All rights reserved.
        </Typography>

        
      </Box>
    </div>
    </GradientBackground>
  )
}

export default Compressed;
