const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const CategorySchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;