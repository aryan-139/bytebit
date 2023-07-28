import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import landing from '../assets/landing.jpg'; // Import the background image
import texture from '../assets/texture.jpg'; // Import the texture image
import { Typography } from '@mui/material';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const MainContainer = styled.div`
  background: url(${landing}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H3Text = styled.h3`
  font-size: 4.8rem;
  color: white;
  margin: 0;
  animation: ${slideInFromLeft} 1.5s ease-in-out;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const H2Text = styled.h2`
  font-size: 9.5rem;
  margin: 0;
  animation: ${slideInFromLeft} 1.5s ease-in-out;
  position: relative;
  color: transparent;
  background-image: url(${texture});
  background-clip: text;
  -webkit-background-clip: text;
  background-size: cover;
  background-repeat: repeat;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0.2, 0.2, 0, -0.5);
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const H5Text = styled.h5`
  font-size: 2rem;
  color: white;
  margin: 0;
  animation: ${fadeInAnimation} 1.8s ease-in;
  margin-top: 2rem;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const OvalButton = styled.button`
  border-radius: 50px;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: bold;
  background: #3f51b5;
  color: white;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  &:hover {
    background: #303f9f;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <H3Text>
        Your Text's Ultimate Companion,
      </H3Text>
      <H2Text>
        ByteBit
      </H2Text>
      <H5Text>
        Fast. Secure. Detailed. Convenient.
      </H5Text>
      <Link to="/main">
      <OvalButton >Get Started</OvalButton>
      </Link>

      {/**Copyright text */}
    <Typography variant="body2" color="textSecondary" sx={{ marginTop: '6rem' }}>
    © {new Date().getFullYear()} Aryan Raj. All rights reserved.
  </Typography>
    </MainContainer>

    
  );
};

export default Main;
