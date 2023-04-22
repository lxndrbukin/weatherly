export default function Day({ day, icon, description, main }) {
  return (
    <div className='day'>
      <h2>{day}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={day} />
      <h4 className='desc'>{description}</h4>
      <span>{Math.round(main.temp)}°</span>
    </div>
  );
}
