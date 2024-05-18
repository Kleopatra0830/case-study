require('dotenv').config();               // require and configure dotenv to load the environment variables
const express = require('express');       // Import the express library
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies
const cors = require('cors');             // Middleware to enable CORS
const { Pool } = require('pg');

const app = express();                    // Create an Express application
const PORT = process.env.PORT || 3000;    // Set the port to use environment variable or 3000

app.use(cors());                          // Use cors middleware to allow cross-origin requests
app.use(bodyParser.json());               // Use bodyParser to parse JSON-formatted incoming requests

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
});

// Test database connection
app.get('/testdb', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.send(rows[0]);
  } catch (err) {
    console.error(err);
    res.send("Error " + err.message);
  }
});

// Define a route handler for GET requests to the home route '/'
app.get('/', (req, res) => {
  res.send('Hello World!');               // Send 'Hello World!' to the client
});

// Start the server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  // Log the port the server is running on
});
