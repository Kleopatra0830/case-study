const express = require('express');       // Import the express library
const bodyParser = require('body-parser'); // Middleware to parse JSON bodies
const cors = require('cors');             // Middleware to enable CORS

const app = express();                    // Create an Express application
const PORT = process.env.PORT || 3000;    // Set the port to use environment variable or 3000

app.use(cors());                          // Use cors middleware to allow cross-origin requests
app.use(bodyParser.json());               // Use bodyParser to parse JSON-formatted incoming requests

// Define a route handler for GET requests to the home route '/'
app.get('/', (req, res) => {
  res.send('Hello World!');               // Send 'Hello World!' to the client
});

// Start the server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  // Log the port the server is running on
});
