const express = require('express');
const router = express.Router(); //call Router() express function
const CartModel = require('../models/Cart'); // import the Cart model

router.post('/create', (req, res) =>{
    const formdata = {
        'user_id': req.body.user_id,
        'product_id': req.body.product_id,
        'status': req.body.status,
        'quantity': req.body.quantity
    }

    const theCart = new CartModel(formdata);

    theCart.save(); // Save to database
    res.send('New Cart was created!');
});

router.get('/all', (req, res) =>{
    CartModel.find()
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;