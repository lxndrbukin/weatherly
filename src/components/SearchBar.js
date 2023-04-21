import { useDispatch, useSelector } from 'react-redux';
import { setSearch, getCurrentWeather } from '../store';

export default function SearchBar() {
  const dispatch = useDispatch();

  const { search } = useSelector((state) => state.data);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeather(search));
  };

  return (
    <div className='searchbar'>
      <button className='search'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
      <form onSubmit={handleSubmit} className='search-input-form'>
        <input
          onChange={handleChange}
          autoComplete='off'
          type='text'
          name='search'
          placeholder='Enter your city'
        />
      </form>
      <button className='geolocation'>
        <i className='fa-solid fa-location-crosshairs'></i>
      </button>
    </div>
  );
}
