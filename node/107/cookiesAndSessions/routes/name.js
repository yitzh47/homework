var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const namecookie = req.cookies['name'] ? JSON.parse(req.cookies['name']) : { name: ""};

    const setName = { name: req.query.name || namecookie.name };

    res.cookie('name', JSON.stringify(setName));
    
    res.render('name', { name: setName.name });
    
});



module.exports = router;
