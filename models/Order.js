const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const OrderSchema = new Schema({
    shipping: {
        type: Schema.Types.ObjectId, // Connects to Shipping Model
        ref: 'Shipping'
    },
    cart: {
        type: Schema.Types.ObjectId, // Connects to Cart Model
        ref: 'Cart'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const OrderModel = mongoose.model('order', OrderSchema);
module.exports = OrderModel;