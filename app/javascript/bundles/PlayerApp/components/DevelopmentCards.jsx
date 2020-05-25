import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DevelopmentCard from './DevelopmentCard';

const StyledDevelopmentCards = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export default ({ playerId }) => {
  const developmentCards = useSelector(state => state.developmentCards);

  return (
    <StyledDevelopmentCards>
      { 
        developmentCards && developmentCards.map((card, index) => (
          <DevelopmentCard key={index} card={card} playerId={playerId}/>
        ))
      }
    </StyledDevelopmentCards>
  )
};
