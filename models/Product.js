const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const ProductSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    images: {
        type: Array, // Products should have a slideshow that's why it is array
        default: []
    },
    stock:  {
        type: Number,
        required: true
    },
    price:  {
        type: Number,
        required: true
    },
    brand:  {
        type: String,
        required: true
    },
    model:  {
        type: String,
        required: true
    },
    specs:  {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;