"use strict";

var express = require('express');

var connectDB = require('./config/db'); //Created Server


var app = express(); // Connect DB

connectDB(); // Initial Middleware

app.use(express.json({
  extended: false
})); //Test first Api

app.get('/', function (req, res) {
  return res.send('API running');
}); // Defined routes

app.use('/api/persons', require('./routes/api/persons'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});