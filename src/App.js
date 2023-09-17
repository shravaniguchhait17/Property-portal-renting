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

// import React from 'react';
import PropertyListingPage from './PropertyListingPage';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <PropertyListingPage />
//     </div>
//   );
// }

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/properties')
      .then(response => {
        console.log('Response:', response.data);
        setProperties(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  

  return (
    <div>
      {properties.map(property => (
      <div key={property._id}>
        <h2>{property.ID}</h2>
        <h2>{property.size_sq_ft}</h2>
        <h2>{property.propertyType}</h2>
        {/* Add other property details here */}
      </div>
    ))}
      {/* Render your properties here */}
    </div>
  );
};

export default App;

