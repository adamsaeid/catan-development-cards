import React from 'react';
import styled from 'styled-components'
import knight from '../images/knight.svg';

const StyledDevelopmentCard = styled.div`
  width: 50%;
  text-align: center;
  font-family: 'Arvo';
  font-size: 0.8rem;
`;

const CardInner = styled.div`
  border-style: solid;
  border-width: 0.07rem;
  margin: 0.4rem;
  padding: 0.7rem;
`;

const CardText = styled.p`
  margin: 0;
`;

const CardIcon = styled.img`
  width: 30%;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.6rem;
  display: block;
  border-style: solid;
  border-width: 0.07rem;
`;

export default ({ card }) => {
  return (
    <StyledDevelopmentCard>
      <CardInner>
        <CardText>
          {card.name}
        </CardText>
        <CardIcon src={knight} />
      </CardInner>
    </StyledDevelopmentCard>
  )
};
