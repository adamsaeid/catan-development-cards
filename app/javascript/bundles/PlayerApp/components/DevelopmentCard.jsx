import React from 'react';
import styled from 'styled-components'

import knight from '../images/knight.svg';
import university from '../images/university.svg';
import library from '../images/library.svg';
import plenty from '../images/plenty.svg';
import palace from '../images/palace.svg';
import roadBuilding from '../images/road-building.svg';
import market from '../images/market.svg';
import chapel from '../images/chapel.svg';
import monopoly from '../images/monopoly.svg';

const StyledDevelopmentCard = styled.div`
  width: 50%;
  text-align: center;
  font-family: 'Arvo';
  font-size: 0.8rem;
`;

const CardInner = styled.div`
  border-style: solid;
  border-width: 0.4rem;
  margin: 0.4rem;
  padding: 2rem;
  border-radius: 1.5rem;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 3rem;
`;

const CardIcon = styled.img`
  width: 40%;
  padding: 0.25rem;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export default ({ card }) => {
  const icon = (cardName) => {
    switch(cardName) {
      case 'Knight':
        return knight;
      case 'Year of Plenty':
        return plenty;
      case 'Road Building':
        return roadBuilding;
      case 'Monopoly':
        return monopoly;
      case 'University':
        return university;
      case 'Chapel':
        return chapel;
      case 'Library':
        return library;
      case 'Market':
        return market;
      case 'Palace':
        return palace;
      default:
        return knight;
    }
  }
  return (
    <StyledDevelopmentCard>
      <CardInner>
        <CardText>
          {card.name}
        </CardText>
        <CardIcon src={icon(card.name)} />
      </CardInner>
    </StyledDevelopmentCard>
  )
};
