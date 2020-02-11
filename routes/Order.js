const express = require('express');
const router = express.Router(); //call Router() express function
const OrderModel = require('../models/Order'); // import the Order model

router.post('/create', (req, res) =>{
    const formdata = {
        'shipping_id': req.body.shipping_id,
        'cart_id': req.body.cart_id,
    }

    const theOrder = new OrderModel(formdata);

    theOrder.save(); // Save to database
    res.send('New Order was created!');
});

router.get('/all', (req, res) =>{
    OrderModel.find()
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;