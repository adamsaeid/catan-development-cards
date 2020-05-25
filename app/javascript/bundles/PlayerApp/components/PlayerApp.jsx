import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store'
import Resources from './Resources';
import DevelopmentCards from './DevelopmentCards';
import "typeface-arvo";

const Name = styled.h1`
  font-family: 'Arvo';
  font-size: 5rem;
  font-weight: normal;
  text-align: center;
`;

const StyledApp = styled.div`
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
`;

const PlayerApp = ({ name, id }) => (
  <Provider store={store}>
    <StyledApp>
      <Name>{ name }</Name>
      <Resources playerId={id}/>
      <DevelopmentCards playerId={id} />
    </StyledApp>
  </ Provider>
);

export default PlayerApp;
