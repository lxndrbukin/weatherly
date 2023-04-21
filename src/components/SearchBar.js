export default function SearchBar() {
  return (
    <div className='searchbar'>
      <button className='search'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
      <input
        autoComplete='off'
        type='text'
        name='search'
        placeholder='Enter your city'
      />
      <button className='geolocation'>
        <i className='fa-solid fa-location-crosshairs'></i>
      </button>
    </div>
  );
}
