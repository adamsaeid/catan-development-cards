import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store'
import Resources from './Resources';

const Name = styled.h1`
  font-family: 'Arvo', serif;
  text-align: center;
`;

const PlayerApp = ({ name, id }) => (
  <Provider store={store}>
    <Name>{ name }</Name>
    <Resources playerId={id}/>
  </ Provider>
);

export default PlayerApp;
