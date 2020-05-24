import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import Resources from './Resources';

const PlayerApp = ({ name }) => (
  <Provider store={store}>
    <div>
      <h1>
        {name}
      </h1>
      <Resources />
    </div>
  </ Provider>
);

export default PlayerApp;
