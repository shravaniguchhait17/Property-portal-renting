// import React, { useState } from 'react';
// import LocationDropdown from './LocationDropdown';
// import DateCalendar from './DateCalendar';
// import PriceRangeSlider from './PriceRangeSlider';
// import PropertyTypeDropdown from './PropertyTypeDropdown';

// const PropertyListingPage = ({ applyFilters }) => {
//   const [filters, setFilters] = useState({
//     location: '',
//     availableDate: null,
//     minPrice: 0,
//     maxPrice: 1000000, 
//     propertyType: '',
//   });

//   const handleApplyFilters = () => {
//     const filterQuery = `http://localhost:5000/api/properties?location=${filters.location}&availableDate=${filters.availableDate}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&propertyType=${filters.propertyType}`;
//     console.log('Filter Query:', filterQuery);

//     fetch(filterQuery)
//       .then(response => response.json())
//       .then(data => {
//         console.log('Filtered Data:', data);
//         applyFilters(data); // Pass the filtered data to the parent component
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h1>Property Listings</h1>
//       <LocationDropdown
//         cities={['Mumbai', 'Delhi', 'Pune']} 
//         onLocationChange={location => setFilters({ ...filters, location })}
//       />
//       <DateCalendar
//         onDateChange={(fromDate, toDate) => setFilters({ ...filters, fromDate, toDate })}
//       />
//       <PriceRangeSlider
//         minPrice={filters.minPrice}
//         maxPrice={filters.maxPrice}
//         onPriceChange={(minPrice, maxPrice) => setFilters({ ...filters, minPrice, maxPrice })}
//       />
//       <PropertyTypeDropdown
//         propertyTypes={['Apartment', 'Independent Floor']} 
//         onPropertyTypeChange={propertyType => setFilters({ ...filters, propertyType })}
//       />
//       <button onClick={handleApplyFilters}>Apply Filters</button>
//     </div>
//   );
// };

// export default PropertyListingPage;


