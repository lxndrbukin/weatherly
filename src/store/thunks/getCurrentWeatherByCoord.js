import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'b4481a539c8d04c4536b6292f74c0a5f';

export const getCurrentWeatherByCoord = createAsyncThunk(
  'weather/getWeatherByCoord',
  async ({ lat, lon }) => {
    const current = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    return { current: current.data, forecast: forecast.data };
  }
);
