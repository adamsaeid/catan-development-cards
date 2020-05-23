import { createStore } from 'redux';
import resourcesReducer from './reducers/resourcesReducer';

let store = createStore(resourcesReducer);

export default store;
