import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'b4481a539c8d04c4536b6292f74c0a5f';

export const getCurrentWeather = createAsyncThunk(
  'currentWeather/getCurrentWeather',
  async (city) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return res.data;
  }
);
