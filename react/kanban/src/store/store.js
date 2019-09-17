import { createStore } from 'redux';
import rootReducer from './reducers';
import middlewares, { run } from './middlewares';

const initialState = {};
const store = createStore(rootReducer, initialState, middlewares);

run();

export default store;