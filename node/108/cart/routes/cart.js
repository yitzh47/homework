var express = require('express');
var Cart = require('../cart.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.locals.cart = new Cart(req.session.cart);
    console.log(res.locals.cart.getItems());

    res.render('layout', { cart: res.locals.cart.getItems(), partials: { content: 'cart' } })
});

module.exports = router;
