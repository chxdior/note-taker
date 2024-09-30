const express = require('express');
const path = require('path');
const router = express.Router();

// GET /notes - Return the notes.html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET * - Return the index.html page for all other routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
