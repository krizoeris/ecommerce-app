const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const ShippingSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, // Connects to User Model
        ref: 'User'
    },
    first_name:  {
        type: String,
        required: true
    },
    last_name:  {
        type: String,
        required: true
    },
    address:  {
        type: String,
        required: true
    },
    city:  {
        type: String,
        required: true
    },
    state:  {
        type: String,
        required: true
    },
    zip:  {
        type: String,
        required: true
    },
    country:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ShippingModel = mongoose.model('shipping', ShippingSchema);
module.exports = ShippingModel;