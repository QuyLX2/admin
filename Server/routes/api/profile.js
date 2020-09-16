const express = require('express');
const router = express.Router();
const authen = require('../../middleware/authen');
const { authGetProfiles, authSetProfile, authDeleteProfile } = require('../../middleware/permissions/profile/authProfile');
const { check, validationResult } = require('express-validator/check');
// const request = require('request');
const config = require('config');
const Person = require('../../models/Person');
const Profile = require('../../models/Profile');
//get profile by id
//access private
// ????
router.get(
    '/me',
    authen,

    async (req, res) => {
        try {
            const profile = await Profile.findOne({ person: req.person.id }).populate('person', ['name', 'avatar']);
            if (!profile) {
                return res.status(400).json({ msg: "There is no profile for this person" });
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
        authSetProfile,
        check('email', 'Email is required').isEmail(),
        check('phone', 'Phone is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            dateOfBirth,
            degree,
            email,
            phone,
            address,
        } = req.body;
        //build profile object
        const profileFields = {};
        profileFields.person = req.person.id;
        if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
        if (degree) profileFields.degree = degree;
        if (email) profileFields.email = email;
        if (phone) profileFields.phone = phone;
        if (address) profileFields.address = address;

        try {
            let profile = await Profile.findOne({ person: req.person.id });
            if (profile) {
                //update
                profile = await Profile.findOneAndUpdate(
                    { person: req.person.id },
                    { $set: profileFields },
                    [{ new: true }]);
                await profile.save();
                return res.json(profile);
            }
            //create
            profile = new Profile(profileFields);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
  
)

// Update Mark
//access private
router.put(
    '/:id',
    authen,
    authSetProfile,
    async (req, res) => {
        const { mark } = req.body;
        try {
            let profile = await Profile.findById(req.params.id);
            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    { person: req.params.id },
                    { $set: { mark } },
                    [{ new: true }]);
                await profile.save();
                return res.json(profile);
            }
            //create
            profile = new Profile(mark);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)


// get all profiles
// access private
router.get('/',
    authen,
    // authGetProfiles,
    async (req, res) => {
        try {
            if (req.person.role === "user") {
                const profiles = await Profile
                    .find()
                    // .populate('person', ['name', 'avatar'])
                    .populate({ path: 'person', select: 'name avatar -_id' });
                profileFr = profiles.map(profile => profile.person);
                return res.json(profileFr);
            }
            const profiles = await Profile
                .find()
                .populate('person', ['name', 'avatar'])
            res.json(profiles);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }
    });

//delete profile person
// delete person(student), delete post(comment)
router.delete('/:id', authen, authDeleteProfile, async (req, res) => {
    try {
        await Profile.findOneAndRemove({ _id: req.params.id });
        await Person.findOneAndRemove({ person: req.person.id });
        res.json({ msg: 'Person deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});



module.exports = router;
