// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure MongoDB is running locally)
mongoose.connect('mongodb://127.0.0.1:27017/PropertyListing', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database');
});

// Define Mongoose Schema for Property (adjust as per your actual schema)
const propertySchema = new mongoose.Schema({
  // Define your property schema fields here
  // For example: name, location, availableFrom, price, propertyType
});

const Property = mongoose.model('Property', propertySchema);

// Routes

// Fetch all available properties
app.get('/api/list-properties', (req, res) => {
  // Fetch properties from the database and send them as JSON response
  Property.find({}, (err, properties) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(properties);
    }
  });
});

// Add a property
app.post('/api/property', (req, res) => {
  // Extract property details from request body and create a new property
  const newProperty = new Property(req.body);
  newProperty.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  });
});

// Update a property
app.put('/api/property/:id', (req, res) => {
  // Update the property with the given ID using req.body
  // Make sure to handle errors and respond appropriately
});

// Delete a property
app.delete('/api/property/:id', (req, res) => {
  // Delete the property with the given ID
  // Make sure to handle errors and respond appropriately
});

// List my properties
app.get('/api/property', (req, res) => {
  // Get properties owned by the authenticated user (you'll need to implement authentication)
  // Make sure to handle errors and respond appropriately
});

// Signup endpoint
app.post('/api/signup', (req, res) => {
  // Handle user registration
  // Make sure to validate the email format and save user details to your database
});

// Login endpoint (assuming you're using JWT for authentication)
app.post('/api/login', (req, res) => {
  // Handle user login, generate JWT token, and send it in the response
  // Make sure to validate user credentials
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

