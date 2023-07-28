import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        About
      </Typography>

      {/* Information about the App */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Information about the App</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>

        {/* Developer Information */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Developer</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>

        {/* Open Source Contributions */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Open Source Contributions</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>

        {/* More Sections */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">More Sections</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>
      </Grid>

      
    </Box>

    
  );
};

export default About;
