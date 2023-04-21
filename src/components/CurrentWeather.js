export default function CurrentWeather() {
  return (
    <section className='current-weather'>
      <div className='current-weather-header'>
        <h4>Current Weather</h4>
        <button className='temp-toggle'>Toggle</button>
      </div>
      <div className='current-weather-info'>
        <div className='info-left'>
          <h3 className='city-name'>Name</h3>
          <div className='city-temp'>
            <img src='' alt='' />
            <h1 className='city-temp-value'>36</h1>
          </div>
          <h3 className='description'>Clear sky</h3>
        </div>
        <div className='info-right'>
          <h4 className='feel'>Feels like 34</h4>
          <div className='temps'>
            <div className='temp'>
              <i className='fa-solid fa-up-long'></i>
              <span className='temp-value'>36</span>
            </div>
            <div className='temp'>
              <i className='fa-solid fa-down-long'></i>
              <span className='temp-value'>32</span>
            </div>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-droplet'></i>
            <span className='label'>Humidity</span>
            <span className='value'>23%</span>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-wind'></i>
            <span className='label'>Wind</span>
            <span className='value'>9kph</span>
          </div>
          <div className='hwp'>
            <i className='fa-solid fa-gauge-high'></i>
            <span className='label'>Pressure</span>
            <span className='value'>1017hPa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
