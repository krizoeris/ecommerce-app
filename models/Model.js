const mongoose = require('mongoose'); // import the moongo from packages

const Schema = mongoose.Schema; // Set the schema constructor

const ModelSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ModelModel = mongoose.model('model', ModelSchema);
module.exports = ModelModel;