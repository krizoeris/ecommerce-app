const express = require('express');
const router = express.Router(); //call Router() express function
const ProductModel = require('../models/Product'); // import the Product model

router.post('/create', (req, res) =>{
    const formdata = {
        'name': req.body.name,
        'details': req.body.details,
        'images': req.body.images,
        'stock': req.body.stock,
        'price': req.body.price,
        'brand': req.body.brand,
        'model': req.body.model,
        'specs': req.body.specs
    }

    const theProduct = new ProductModel(formdata);

    theProduct.save(); // Save to database
    res.send('New Product was created!');
});

router.get('/all', (req, res) =>{
    ProductModel.find()
    .populate('category')
    .then((results)=>{
        res.json(results);
    });
});

module.exports = router;