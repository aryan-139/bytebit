import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#3f51b5',
  color: 'white',
  borderRadius: '50px',
  padding: theme.spacing(2, 4),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  fontSize: '1.2rem',
  '&:hover': {
    background: '#303f9f',
  },
}));

const CustomButton = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CustomButton;
