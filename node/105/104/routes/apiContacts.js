var express = require('express');
var router = express.Router();
var contactsArr = require('../public/contactsArr.js')


router.get('/contacts', function (req, res, next) { 
    connection.query('SELECT * FROM contacts', function (error, results, fields) {
        if (error) throw error;
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(results);
        res.json(results);
    });

    //res.json(contactsArr.contacts)  
});

// router.post('/', function (req, res, next) {
//     contactsArr.addContact(req.body.firstName, req.body.lastName, req.body.email, req.body.phone);
    
//     res.end();
// });



module.exports = router;
