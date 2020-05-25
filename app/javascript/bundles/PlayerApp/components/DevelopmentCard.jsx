import React, { useState } from 'react';
import { useDispatch } from "react-redux";
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

import Modal from 'react-modal';
import { playDevelopmentCard } from '../actions/playerActions';

const StyledDevelopmentCard = styled.div`
  width: 50%;
  text-align: center;
  font-family: 'Arvo';
  font-size: 0.8rem;
`;

const CardInner = styled.div`
  border-style: solid;
  border-width: 0.4rem;
  border-radius: 1.5rem;
  margin: 0.4rem;
  padding: 2rem 2rem 3.5rem 2rem;
`;

const CardModalTitle = styled.p`
  text-align: center;
  font-family: 'Arvo';
  font-size: 5rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const CardText = styled.p`
  text-align: center;
  font-family: 'Arvo';
  margin: 0;
  font-size: 3rem;
`;

const CardIcon = styled.img`
  border-style: solid;
  border-width: 0.4rem;
  border-radius: 1.5rem;
  width: 40%;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const CardDescription = styled.p`
  font-size: 3rem;
  font-family: 'Arvo';
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  border-style: solid;
  border-radius: 4rem;
  border-color: #9c2428;
  color: #9c2428;
  border-width: 0.4rem;
  font-size: 3rem;
  font-family: 'Arvo';
  display: block;
  background-color: transparent;
  padding: 1rem 3rem;
  margin-right: 2rem;
`;

const PlayButton = styled.button`
  border-style: solid;
  border-radius: 4rem;
  border-color: #48a867;
  background-color: #48a867;
  color: white;
  border-width: 0.4rem;
  font-size: 3rem;
  font-family: 'Arvo';
  display: block;
  padding: 1rem 3rem;
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    maxWidth              : '75rem',
  }
};

export default ({ playerId, card }) => {
  const dispatch = useDispatch();

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

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const playCard = () => {
    dispatch(playDevelopmentCard(playerId, card.id));
    closeModal();
  }

  return (
    <>
      <StyledDevelopmentCard onClick={openModal}>
        <CardInner>
          <CardText>
            {card.name}
          </CardText>
          <CardIcon src={icon(card.name)} />
        </CardInner>
      </StyledDevelopmentCard>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <CardInner>
          <CardModalTitle>
            {card.name}
          </CardModalTitle>
          <CardIcon src={icon(card.name)} />
          <CardDescription>{card.description}</CardDescription>
          <ButtonContainer>
            <CloseButton onClick={closeModal}>Back</CloseButton>
            <PlayButton onClick={playCard}>Play</PlayButton>
          </ButtonContainer>
        </CardInner>
      </Modal>
    </>
  )
};
