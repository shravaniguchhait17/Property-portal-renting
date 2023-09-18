// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/property')
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data);
        setProperties(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="property-grid">
      {properties.map(property => (
        <div className="property-card" key={property._id}>
          <h2>ID: {property.ID}</h2>
          <p>Size: {property.size_sq_ft} sq ft</p>
          <p>Property Type: {property.propertyType}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Locality: {property.localityName}</p>
          <p>City: {property.cityName}</p>
          <p>Price: {property.price}</p>
          <p>Company: {property.companyName}</p>
          <p>Society: {property.society}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
