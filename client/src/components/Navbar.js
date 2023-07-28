import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color='inherit' >
      <Toolbar>
        <Typography variant="h3" color="inherit" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none' }} >
          ByteBit
        </Typography>

         
      <Button color="inherit" component={Link} to="/help" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Help</Button>
      <Button color="inherit" component={Link} to="/about" sx={{ fontSize: '1rem', marginRight: '1rem' }}>About</Button>

        {/**Phase 2 Development */}
      {/* <Button color="inherit" component={Link} to="/contact" sx={{ fontSize: '1rem' }}>Contact</Button> */}
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
