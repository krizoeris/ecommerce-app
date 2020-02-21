const express = require('express');
const router = express.Router(); //call Router() express function
const ModelModel = require('../models/Model'); // import the Model model

router.post('/create', (req, res) =>{
    const formdata = {
        'name': req.body.name,
    }

    const theModel = new ModelModel(formdata);

    theModel.save(); // Save to database
    res.send('New Model was created!');
});

router.get('/all', (req, res) =>{
    ModelModel.find()
    .then((results)=>{
        res.json(results);
    });
});

// test 
module.exports = router;