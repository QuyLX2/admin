"use strict";

var jwt = require('jsonwebtoken');

var config = require('config');

var Person = require('../models/Person');

function authen(req, res, next) {
  var token, decoded;
  return regeneratorRuntime.async(function authen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = req.header('x-auth-token');

          if (token) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: 'No token, Access Denied'
          }));

        case 3:
          // verify token
          try {
            decoded = jwt.verify(token, config.get('jwtSecret'));
            req.person = decoded.person; // const person = await Person.findById(req.person.id);
            // console.log(person);

            next();
          } catch (err) {
            res.status(401).json({
              msg: 'Token is not valid'
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  authen: authen
};