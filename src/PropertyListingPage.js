import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    availableFrom: '',
    priceRange: [0, 1000], // Example range, you can adjust it
    propertyType: '',
  });

  useEffect(() => {
    // Fetch properties when component mounts
    axios.get('/api/list-properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  // Additional filtering logic goes here

  return (
    <div>
      <h1>Property Listings</h1>
      <div>
        <label>Location:</label>
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="">Any</option>
          {/* Populate options dynamically */}
        </select>
      </div>
      <div>
        <label>Available from:</label>
        <input type="date" name="availableFrom" value={filters.availableFrom} onChange={handleFilterChange} />
      </div>
      <div>
        <label>Price Range:</label>
        <input type="range" name="priceRange" min="0" max="1000" value={filters.priceRange[1]} onChange={handleFilterChange} />
      </div>
      <div>
        <label>Property Type:</label>
        <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange}>
          <option value="">Any</option>
          {/* Populate options dynamically */}
        </select>
      </div>
      <div>
        <button>Apply Filters</button>
      </div>
      <div>
        {properties.map(property => (
          <div key={property.id}>
            <h3>{property.name}</h3>
            {/* Display property details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListingPage;
