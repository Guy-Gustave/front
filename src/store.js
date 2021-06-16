import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

// const store = createStore(allReducers,
//   {},
//   // eslint-disable-next-line no-underscore-dangle
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
