const express = require('express'); // importing the express library, node.js is the runtime
const mongoose = require('mongoose');
const keys = require('./config/keys');

// bootstrap the database
require('./models/User'); // loads the user.js is loaded  
require('./services/passport'); // no exporting so no need to define module.exports = in passport.js


// make connection to mongoose
const options = {
    useNewUrlParser: true
};
mongoose.connect(keys.mongoURI, options);

const app = express(); // this app object is used to set up configuration that runs the business logic

require('./routes/authRoutes')(app);

// reads from environment variables
// this is from the framework process
const PORT = process.env.PORT || 5005;
app.listen(PORT);