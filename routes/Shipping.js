const express = require('express');
const router = express.Router(); //call Router() express function
const ShippingModel = require('../models/Shipping'); // import the Shipping model

router.post('/create', (req, res) =>{
    const formdata = {
        'user': req.body.user,
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'address': req.body.address,
        'city': req.body.city,
        'zip': req.body.zip,
        'country': req.body.country,
        'email': req.body.email
    }

    const theShipping = new ShippingModel(formdata);

    theShipping.save(); // Save to database
    res.send('New Shipping was created!');
});

router.get('/all', (req, res) =>{
    ShippingModel.find()
    .populate('user')
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;