const express = require('express');
const router = express.Router(); //call Router() express function
const OrderModel = require('../models/Order'); // import the Order model

router.post('/create', (req, res) =>{
    const formdata = {
        'shipping': req.body.shipping,
        'cart': req.body.cart,
    }

    const theOrder = new OrderModel(formdata);

    theOrder.save(); // Save to database
    res.send('New Order was created!');
});

router.get('/all', (req, res) =>{
    OrderModel.find()
    .populate('shipping')
    .populate('cart')
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;