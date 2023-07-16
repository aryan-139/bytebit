import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }} >
          ByteBit
        </Typography>
        {/**Phase 2 Development */}

        {/* <Button color="inherit">Help</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
