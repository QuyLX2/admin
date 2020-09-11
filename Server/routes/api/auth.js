const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Auth API is running'));


module.exports = router;