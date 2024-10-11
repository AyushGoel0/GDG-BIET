const express = require('express');
const app = express();
const apiRoutes = require('./api/routes');
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the API routes
app.use('/api', apiRoutes);

// Example API route
// app.get('/api', (req, res) => {
//   res.send('Hello from the backend!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
