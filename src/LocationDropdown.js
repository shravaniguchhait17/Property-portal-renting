import React from 'react';

const LocationDropdown = ({ cities, onLocationChange }) => {
  const handleChange = (e) => {
    const selectedCity = e.target.value;
    onLocationChange(selectedCity);
  };

  return (
    <div>
      <label htmlFor="location">Location:</label>
      <select id="location" onChange={handleChange}>
        <option value="">Select a city</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationDropdown;
