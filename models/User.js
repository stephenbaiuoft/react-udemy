const mongoose = require('mongoose');
const Schema = mongoose.Schema; // take the property in mongoose, and assign to Schema local const
// const { Schema } = mongoose; // ESMAC old version, same as the line ahead

// take the Schema and create an instance of it
const userSchema = new Schema( {
    googleId: String
});

// create a new collection called 'users' and use the userSchema if the collection does not exist
// mongoose will not re-create if the 'users' collection exists already
mongoose.model('users', userSchema);