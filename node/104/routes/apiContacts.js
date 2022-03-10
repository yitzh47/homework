var express = require('express');
var router = express.Router();
var contactsArr = require('../public/contactsArr.js')


router.get('/contacts', function (req, res, next) { 
    res.json(contactsArr.contacts)  
});

router.post('/', function (req, res, next) {
    contactsArr.addContact(req.body.name, req.body.phone);
    res.end();
});


module.exports = router;
