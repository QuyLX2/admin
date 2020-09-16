const Profile = require('../../../models/Profile');

function canViewProfile(person) {
  return person.role === "admin"
  
}
async function canUpdateProfile(person, req) {
  const profile = await Profile.findOne({ person: req.person.id })
  return person.role === "admin" || profile
}

function canDeleteProfile(person) {
  return person.role === "admin"
}

function authGetProfiles(req, res, next) {
  if (!canViewProfile(req.person)) {
    res.status(401)
    return res.send('Not Allowed')
  }
  next();
}

function authDeleteProfile(req, res, next) {
  if (!canDeleteProfile(req.person)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next();
}


function authSetProfile(req, res, next) {
  if (!canUpdateProfile(req.person, req)) {
    res.status(401)
    return res.send('Not Allowed')
  }
  next();
}
function authCreateUser(req, res, next) {
  if (!canViewProfile(req.person)) {
    res.status(401)
    return res.send('Not Allowed')
  }
  next();
}

module.exports = {
  authGetProfiles,
  authSetProfile,
  authDeleteProfile,
  authCreateUser
}