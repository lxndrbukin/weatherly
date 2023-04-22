import { useSelector } from 'react-redux';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

export default function App() {
  const { current, forecast } = useSelector((state) => state.data);

  return (
    <div className='app'>
      <Header />
      <SearchBar />
      {current && (
        <CurrentWeather
          city={current.name}
          weather={current.weather[0]}
          hwp={{ main: current.main, wind: current.wind }}
          sys={current.sys}
        />
      )}
      {forecast && <Forecast list={forecast.list} />}
    </div>
  );
}
