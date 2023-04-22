import { useDispatch, useSelector } from 'react-redux';
import {
  setSearch,
  getCurrentWeather,
  getCurrentWeatherByCoord,
} from '../store';

export default function SearchBar() {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.data);

  const handleClick = () => {
    const successCallback = async (position) => {
      const { latitude, longitude } = await position.coords;
      dispatch(getCurrentWeatherByCoord({ lat: latitude, lon: longitude }));
    };

    navigator.geolocation.getCurrentPosition(successCallback);
  };

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeather(search));
  };

  return (
    <div className='searchbar'>
      <button onClick={handleClick} className='geolocation'>
        <i className='fa-solid fa-location-crosshairs'></i>
      </button>
      <form onSubmit={handleSubmit} className='search-input-form'>
        <input
          onChange={handleChange}
          autoComplete='off'
          type='text'
          name='search'
          placeholder='Enter your city'
        />
        <button type='submit' className='search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
    </div>
  );
}
