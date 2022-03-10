var express = require('express');
var router = express.Router();
var contacts = require('../public/contactsArr.js')

router.get('/', function (req, res, next) {
    res.render('layout', {
        title: 'contacts',
        contacts,
        partials: { content: 'contacts' }
    });
});

router.get('/addContact', function (req, res, next) {
    res.render('layout', {
        title: 'add contact',
        contacts,
        partials: { content: 'contacts' }
    });
});

module.exports = router;
