const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World12!');
});

// Start the server
app.listen(port, '0.0.0.0' () => {
  console.log(`Server is running on http://localhost:${port}`);
});

