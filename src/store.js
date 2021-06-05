import { createStore } from 'redux';
import allReducers from './reducers/index';

const store = createStore(allReducers,
  {},
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
