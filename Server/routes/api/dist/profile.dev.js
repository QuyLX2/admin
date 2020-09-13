"use strict";

var express = require('express');

var router = express.Router();

var authen = require('../../middleware/authen');

var _require = require('express-validator/check'),
    check = _require.check,
    validationResult = _require.validationResult;

var request = require('request');

var config = require('config');

var Person = require('../../models/Person');

var Profile = require('../../models/Profile'); //get profile by id
//access private


router.get('/me', authen, function _callee(req, res) {
  var profile;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Profile.findOne({
            person: req.person.id
          }).populate('person', ['name', 'avatar']));

        case 3:
          profile = _context.sent;

          if (profile) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: 'There is no profile for this person'
          }));

        case 6:
          res.json(profile);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0.message);
          res.status(500).send('Server Error');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); //post request
//create and update person profile

router.post('/', [authen, check('email', 'Email is required').isEmail(), check('phone', 'Phone is required').not().isEmpty()], function _callee2(req, res) {
  var errors, _req$body, dateOfBirth, degree, email, phone, address, mark, profileFields, profile;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          _req$body = req.body, dateOfBirth = _req$body.dateOfBirth, degree = _req$body.degree, email = _req$body.email, phone = _req$body.phone, address = _req$body.address, mark = _req$body.mark; //build profile object

          profileFields = {};
          profileFields.person = req.person.id;
          if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
          if (degree) profileFields.degree = degree;
          if (email) profileFields.email = email;
          if (phone) profileFields.phone = phone;
          if (address) profileFields.address = address;
          if (mark) profileFields.mark = mark; // Need authorization
          // Student cant change mark and create mark

          _context2.prev = 12;
          _context2.next = 15;
          return regeneratorRuntime.awrap(Profile.findOne({
            person: req.person.id
          }));

        case 15:
          profile = _context2.sent;

          if (!profile) {
            _context2.next = 21;
            break;
          }

          _context2.next = 19;
          return regeneratorRuntime.awrap(Profile.findOneAndUpdate({
            person: req.person.id
          }, {
            $set: profileFields
          }, {
            "new": true
          }));

        case 19:
          profile = _context2.sent;
          return _context2.abrupt("return", res.json(profile));

        case 21:
          //create
          profile = new Profile(profileFields);
          _context2.next = 24;
          return regeneratorRuntime.awrap(profile.save());

        case 24:
          res.json(profile);
          _context2.next = 31;
          break;

        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](12);
          console.error(_context2.t0.message);
          res.status(500).send('Server error');

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[12, 27]]);
}); // get all profiles
// access private

router.get('/', authen, function _callee3(req, res) {
  var profiles;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Profile.find().populate('user', ['name', 'avatar']));

        case 3:
          profiles = _context3.sent;
          res.json(profiles);
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0.message);
          res.status(500).send('Server Error');

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;