import { useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';

export default function App() {
  const { current } = useSelector((state) => state.data);

  return (
    <div className='app'>
      <Header />
      <SearchBar />
      {current && (
        <CurrentWeather
          city={current.name}
          weather={current.weather[0]}
          hwp={{ main: current.main, wind: current.wind }}
        />
      )}
    </div>
  );
}
