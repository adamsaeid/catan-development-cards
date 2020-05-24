import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import resourcesReducer from './reducers/resourcesReducer';

let store = createStore(resourcesReducer, applyMiddleware(thunk));

export default store;
