import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    data: weatherReducer,
  },
});

export * from './slices/weatherSlice';
export * from './thunks/getCurrentWeather';
