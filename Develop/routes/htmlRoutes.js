const path = require('path');
const router = require('express').Router();

// responds with 'notes.html'
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// everything else responds with 'index.html'
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
