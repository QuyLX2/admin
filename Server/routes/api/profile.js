const express = require('express');
const router = express.Router();
const { authen } = require('../../middleware/authen');
const { check, validationResult } = require('express-validator/check');
const {
  canViewProfile,
  scopedProfile,
  canAddProfile,
} = require('../../middleware/permissions/profile/profiles');
const request = require('request');
const config = require('config');
const Person = require('../../models/Person');
const Profile = require('../../models/Profile');
//get profile by id
//access private
router.get('/me', authen, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      person: req.person.id,
    }).populate('person', ['name', 'avatar']);
    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'There is no profile for this person' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//post request
//create and update person profile
router.post(
  '/',
  [
    authen,
    check('email', 'Email is required').isEmail(),
    check('phone', 'Phone is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { dateOfBirth, degree, email, phone, address, mark } = req.body;
    //build profile object
    const profileFields = {};
    profileFields.person = req.person.id;
    if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
    if (degree) profileFields.degree = degree;
    if (email) profileFields.email = email;
    if (phone) profileFields.phone = phone;
    if (address) profileFields.address = address;
    if (mark) profileFields.mark = mark;
    // Need authorization
    // Student cant change mark and create mark
    try {
      // Admin can change and access
      let person = await Person.findById(req.person.id);
      let profiles = await Profile.find().populate('person', [
        'name',
        'avatar',
      ]);

      // checkRole(person)
      if (profiles) {
        //update
        profile = await Profile.findOneAndUpdate(
          { person: req.person.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //create
      if (canAddProfile(person, profile)) {
        newProfile = new Profile(profileFields);
        await newProfile.save();
        res.json(newProfile);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// get all profiles
// access private
router.get('/', authen, async (req, res) => {
  try {
    let person = await Person.findById(req.person.id);
    let profile = await Profile.findOne({ person: req.person.id });
    // // author can view
    // if(canViewProfile(person, profile)){
    // }

    //
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);

    
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
