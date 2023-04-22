export default function CurrentWeather({ city, weather, hwp, sys }) {
  const hwpArray = [
    {
      name: 'Humidity',
      icon: 'fa-solid fa-droplet',
      value: `${hwp.main.humidity}%`,
    },
    {
      name: 'Wind',
      icon: 'fa-solid fa-wind',
      value: `${hwp.wind.speed}m/s`,
    },
    {
      name: 'Pressure',
      icon: 'fa-solid fa-gauge-high',
      value: `${hwp.main.pressure}hPa`,
    },
  ];

  const tempArray = [
    {
      icon: 'fa-solid fa-up-long',
      value: Math.round(hwp.main.temp_max),
    },
    {
      icon: 'fa-solid fa-down-long',
      value: Math.round(hwp.main.temp_min),
    },
  ];

  const renderedTemps = tempArray.map((temp, idx) => {
    return (
      <div key={idx} className='temp'>
        <i className={temp.icon}></i>
        <span className='value'>{temp.value}°</span>
      </div>
    );
  });

  const renderedHwp = hwpArray.map((item) => {
    return (
      <div key={item.name} className='hwp'>
        <i className={item.icon}></i>
        <span className='label'>{item.name}</span>
        <span className='value'>{item.value}</span>
      </div>
    );
  });

  return (
    <section className='current-weather'>
      <h4 className='current-weather-header'>Current Weather</h4>
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
          <div className='temps'>{renderedTemps}</div>
          {renderedHwp}
        </div>
      </div>
    </section>
  );
}
