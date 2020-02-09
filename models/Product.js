const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const ProductSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    description: {
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
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, // Connects to category
        ref: 'Category'
    },
    brand:  {
        type: String,
        required: true
    },
    model:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;