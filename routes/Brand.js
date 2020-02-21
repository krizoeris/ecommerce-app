const express = require('express');
const router = express.Router(); //call Router() express function
const BrandModel = require('../models/Brand'); // import the Brand model

router.post('/create', (req, res) =>{
    const formdata = {
        'name': req.body.name,
    }

    const theBrand = new BrandModel(formdata);

    theBrand.save(); // Save to database
    res.send('New Brand was created!');
});

router.get('/all', (req, res) =>{
    BrandModel.find()
    .then((results)=>{
        res.json(results);
    });
});

// test 
module.exports = router;