const authen = require('../authen');

function canViewPost(person, post){
    return (
        req.person.role === "admin" ||
        req.person.id 
    )
}