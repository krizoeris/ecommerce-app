const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const BrandSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const BrandModel = mongoose.model('brand', BrandSchema);
module.exports = BrandModel;