﻿import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer /* preloadedState, */,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
