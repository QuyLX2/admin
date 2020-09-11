const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Profile API is running'));

module.exports = router;
