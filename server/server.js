// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Set up Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/PropertyListing', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the property schema and model
const propertySchema = new mongoose.Schema({
  
  ID: Number,
  size_sq_ft: Number,
  propertyType: String,
  bedrooms: Number,
  localityName: String,
  cityName: String,
  price: Number,
  companyName: String,
  society: String,
  availableFrom: String
  // Add other properties as needed
});

const Property = mongoose.model('properties', propertySchema);

app.get('/api', (req, res) => {
  res.send('Welcome to the Property Listing API'); // You can customize this message
});

// Define API routes
app.get('/api/properties', async (req, res) => {
  try {
    // const properties = await Property.find({});
    const properties = await db.collection('properties').find({}).toArray();
    console.log('Properties:', properties);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add routes for adding, updating, and deleting properties if needed

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
