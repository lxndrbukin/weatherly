export default function CurrentWeather({ city, weather, hwp }) {
  return (
    <section className='current-weather'>
      <div className='current-weather-header'>
        <h4>Current Weather</h4>
        <button className='temp-toggle'>Toggle</button>
      </div>
      <div className='current-weather-info'>
        <div className='info-left'>
          <h3 className='city-name'>{city}</h3>
          <div className='city-temp'>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt={city}
            />
            <h1 className='city-temp-value'>{Math.round(hwp.main.temp)}°</h1>
          </div>
          <h3 className='description'>{weather.description}</h3>
        </div>
        <div className='info-right'>
          <h4 className='feel'>
            Feels like {Math.round(hwp.main.feels_like)}°
          </h4>
          <div className='temps'>
            <div className='temp'>
              <i className='fa-solid fa-up-long'></i>
              <span className='value'>{Math.round(hwp.main.temp_max)}°</span>
            </div>
            <div className='temp'>
              <i className='fa-solid fa-down-long'></i>
              <span className='value'>{Math.round(hwp.main.temp_min)}°</span>
            </div>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-droplet'></i>
            <span className='label'>Humidity</span>
            <span className='value'>{hwp.main.humidity}%</span>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-wind'></i>
            <span className='label'>Wind</span>
            <span className='value'>{hwp.wind.speed}kph</span>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-gauge-high'></i>
            <span className='label'>Pressure</span>
            <span className='value'>{hwp.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
