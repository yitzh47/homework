var express = require('express');
var router = express.Router();
var contacts = require('../public/contactsArr.js')

router.get('/', function (req, res, next) {

    connection.query('SELECT * FROM contacts', function (error, results, fields) {
        if (error) throw error;
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(results);
        res.render('layout', {
            title: 'contacts',
            contacts: results,

            partials: { content: 'contacts' }
        });
    });
});

router.get('/editContact/:id', function (req, res, next) {
    connection.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], function (error, results, fields) {
        res.render('layout', {
            title: 'Edit Contact',
            contact: results[0],
            partials: { content: 'contact' }
        });
    });
});



    //     connection.query('INSERT INTO contacts (firstName, lastName, email, phone) VALUES(?,?,?,?)',
    //         [req.body.firstName, req.body.lastName, req.body.email, req.body.phone], (error, results, fields) => {
    //             if (error) {
    //                 //return res.sendStatus(500);
    //                 res.statusCode = 500;
    //                 return res.send(error.message);
    //             }

    //             req.body.id = results.insertId;

    //             res.status(201)
    //             res.json(results);
    //         });



module.exports = router;
