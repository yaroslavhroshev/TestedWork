import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logSlices from './slices/logSlices';

const reducer = combineReducers({
  log: logSlices,
});

const store = configureStore({
  reducer,
});

export default store;
