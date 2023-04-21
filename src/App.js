import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <SearchBar />
      <CurrentWeather />
    </div>
  );
}
