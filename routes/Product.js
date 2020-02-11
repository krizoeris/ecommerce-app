const express = require('express');
const router = express.Router(); //call Router() express function
const ProductModel = require('../models/Product'); // import the Product model

router.post('/create', (req, res) =>{
    const formdata = {
        'name': req.body.name,
        'description': req.body.description,
        'stock': req.body.stock,
        'price': req.body.price,
        'category_id': req.body.category_id,
        'brand': req.body.brand,
        'model': req.body.model
    }

    const theProduct = new ProductModel(formdata);

    theProduct.save(); // Save to database
    res.send('New Product was created!');
});

router.get('/all', (req, res) =>{
    ProductModel.find()
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;