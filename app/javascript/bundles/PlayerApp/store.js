import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import playerReducer from './reducers/playerReducer';

let store = createStore(playerReducer, applyMiddleware(thunk));

export default store;
