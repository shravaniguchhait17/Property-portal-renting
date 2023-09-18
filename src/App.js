// import React, { useState, useEffect } from 'react';
// import PropertyListingPage from './PropertyListingPage';
// import './App.css';

// const App = () => {
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [filters, setFilters] = useState({
//     location: '',
//     fromDate: null,
//     toDate: null,
//     minPrice: 0,
//     maxPrice: 1000000,
//     propertyType: '',
//   });

//   useEffect(() => {
//     fetch('http://localhost:5000/api/properties')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data:', data);
//         setProperties(data);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const applyFilters = (newFilters) => {
//     // Update the filters state
//     setFilters(newFilters);

//     // Apply filters to properties
//     const filteredData = properties.filter(properties => {
//       // Check if the property matches the selected filters
//       const locationMatch = !newFilters.location || properties.cityName === newFilters.location;
//       const fromDateMatch = !newFilters.fromDate || properties.availableFrom >= newFilters.fromDate;
//       const toDateMatch = !newFilters.toDate || properties.availableFrom <= newFilters.toDate;
//       const priceMatch =
//         properties.price >= newFilters.minPrice && properties.price <= newFilters.maxPrice;
//       const propertyTypeMatch =
//         !newFilters.propertyType || properties.propertyType === newFilters.propertyType;

//       return (
//         locationMatch && fromDateMatch && toDateMatch && priceMatch && propertyTypeMatch
//       );
//     });

//     setFilteredProperties(filteredData);
//   };

//   return (
//     <div className="property-grid">
//       <PropertyListingPage applyFilters={applyFilters} />
//       {filteredProperties.length > 0 ? (
//         filteredProperties.map(property => (
//           <div className="property-card" key={properties._id}>
//             <h2>ID: {properties.ID}</h2>
//             <p>
//               <img
//                 src={properties.imageLinks}
//                 alt="Property"
//                 style={{ width: '250px', height: '400px' }}
//               />
//             </p>
//             <p>Size: {properties.size_sq_ft} sq ft</p>
//             <p>Property Type: {properties.propertyType}</p>
//             <p>Bedrooms: {properties.bedrooms}</p>
//             <p>Locality: {properties.localityName}</p>
//             <p>City: {properties.cityName}</p>
//             <p>Price: {properties.price}</p>
//             <p>Company: {properties.companyName}</p>
//             <p>Society: {properties.society}</p>
//             <p>Available From: {properties.availableFrom}</p>
//             {/* Render other property details */}
//           </div>
//         ))
//       ) : (
//         <p>No properties match the selected filters.</p>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data);
        setProperties(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="property-grid">
      {properties.map(properties => (
        <div className="property-card" key={properties._id}>
          

          
          <p>
            <img
                src={properties.imageLinks}
                alt="Property"
                style={{ width: '250px', height: '400px' }}
              />
          </p>
          <p>Society: {properties.society}</p>
          <p>Locality: {properties.localityName}</p>
          <p>Property Type: {properties.propertyType}</p>
          <p>City: {properties.cityName}</p>
          <p>Size: {properties.size_sq_ft} sq ft</p>
          <p>Bedrooms: {properties.bedrooms}</p>
          <p>Price: {properties.price}</p>
          <p>Company: {properties.companyName}</p>
          
        </div>
      ))}
    </div>
  );
};

export default App;
