import Day from './Day';

export default function Forecast({ list }) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderedDays = list.map((time) => {
    if (time.dt_txt.includes('12:00:00')) {
      const dayNum = new Date(time.dt * 1000).getDay();
      return (
        <Day
          key={dayNum}
          day={days[dayNum]}
          icon={time.weather[0].icon}
          description={time.weather[0].description}
          main={time.main}
        />
      );
    }
    return null;
  });
  return (
    <section className='forecast'>
      <h4 className='forecast-header'>5-day forecast</h4>
      <div className='forecast-days'>{renderedDays}</div>
    </section>
  );
}
