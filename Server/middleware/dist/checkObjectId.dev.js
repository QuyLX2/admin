"use strict";

var mongoose = require('mongoose'); // middleware to check for a valid object id


var checkObjectId = function checkObjectId(idToCheck) {
  return function (req, res, next) {
    if (!mongoose.Types.ObjectId.isValid(req.params[idToCheck])) return res.status(400).json({
      msg: 'Invalid ID'
    });
    next();
  };
};

module.exports = checkObjectId;