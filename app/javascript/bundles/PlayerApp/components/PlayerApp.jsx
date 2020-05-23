import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'

const PlayerApp = ({ name }) => (
  <Provider store={store}>
    <div>
      <h3>
        Hello, {name}!
      </h3>
    </div>
  </ Provider>
);

export default PlayerApp;
