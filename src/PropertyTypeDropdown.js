import React from 'react';

const PropertyTypeDropdown = ({ propertyTypes, onPropertyTypeChange }) => {
  const handleChange = (e) => {
    const selectedType = e.target.value;
    onPropertyTypeChange(selectedType);
  };

  return (
    <div>
      <label htmlFor="propertyType">Property Type:</label>
      <select id="propertyType" onChange={handleChange}>
        <option value="">Select a type</option>
        {propertyTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default PropertyTypeDropdown;
