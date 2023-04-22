import { createSlice } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../thunks/getCurrentWeather';
import { getCurrentWeatherByCoord } from '../thunks/getCurrentWeatherByCoord';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: null,
    forecast: null,
    search: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    });
    builder.addCase(getCurrentWeatherByCoord.fulfilled, (state, action) => {
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    });
  },
});

export default weatherSlice.reducer;
export const { setSearch } = weatherSlice.actions;
