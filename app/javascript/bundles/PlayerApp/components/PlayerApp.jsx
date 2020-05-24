import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import Resources from './Resources';

const PlayerApp = ({ name }) => (
  <Provider store={store}>
    <Resources />
  </ Provider>
);

export default PlayerApp;
