const express = require('express');
const router = express.Router(); //call Router() express function
const CategoryModel = require('../models/Category'); // import the category model

router.post('/create', (req, res) =>{
    const formdata = {
        'name': req.body.name,
    }

    const theCategory = new CategoryModel(formdata);

    theCategory.save(); // Save to database
    res.send('New Category was created!');
});

router.get('/all', (req, res) =>{
    CategoryModel.find()
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;