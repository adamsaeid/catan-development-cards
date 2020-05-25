import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store'
import Resources from './Resources';
import DevelopmentCards from './DevelopmentCards';
import "typeface-arvo";

const Name = styled.h1`
  font-family: 'Arvo';
  font-weight: normal;
  text-align: center;
`;

const PlayerApp = ({ name, id }) => (
  <Provider store={store}>
    <Name>{ name }</Name>
    <Resources playerId={id}/>
    <DevelopmentCards />
  </ Provider>
);

export default PlayerApp;
