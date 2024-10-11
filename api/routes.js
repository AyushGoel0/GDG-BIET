const express = require('express');
const router = express.Router();

// Define a sample route
router.get('/data', (req, res) => {
  res.json({ message: 'Hello from the API route' });
});

module.exports = router;
