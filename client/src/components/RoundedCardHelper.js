import styled from 'styled-components';
import { Card } from '@mui/material';

const RoundedCard = styled(Card)`
  && {
    border-radius: 28px; 
    height: 125px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Add any additional styles you want here */
  }
`;

export default RoundedCard;