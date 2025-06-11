// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './slice/loaderSlice';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export default store;
