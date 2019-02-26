const mongoose = require('mongoose');
const Schema = mongoose.Schema; // take the property in mongoose, and assign to Schema local const
// const { Schema } = mongoose; // ESMAC old version, same as the line ahead

// take the Schema and create an instance of it
const recipientSchema = new Schema({
    email: String,
    responeded: {
        type: Boolean,
        default: false
    }
});

// note recipientSchema is used in Survey as a sub documentary collection
module.exports = recipientSchema;
