const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, // Connects to User Model
        ref: 'user'
    },
    product: {
        type: Schema.Types.ObjectId, // Connects to category
        ref: 'product'
    },
    status:  {
        type: String, //Checks if already paid or pending
        required: true
    },
    quantity:  {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CartModel = mongoose.model('cart', CartSchema);
module.exports = CartModel;