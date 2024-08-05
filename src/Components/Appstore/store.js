// setting up store to change their state

import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from '../Reducer/reducer';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
