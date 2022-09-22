import { createStore } from 'redux';
import { appReducer, initialState } from './reducer';

const store = createStore(appReducer, initialState);

export default store;
