const express = require('express'); // importing the express library, node.js is the runtime
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session'); 
const passport = require('passport');

// bootstrap the database
require('./models/User'); // loads the user.js is loaded  
require('./services/passport'); // no exporting so no need to define module.exports = in passport.js


// make connection to mongoose
const options = {
    useNewUrlParser: true
};
mongoose.connect(keys.mongoURI, options);

const app = express(); // this app object is used to set up configuration that runs the business logic
 
// config cookie session
app.use(
    // cookieSession is a function? 
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // how long this cookie lasts with baseunit of milisecs
        keys: [keys.cookieKey] // key to encrypt the cookie 
    })
);

// tell passport that it should use cookies to use authentication
app.use(passport.initialize());
app.use(passport.session());

// pass in app to authRoute function
require('./routes/authRoutes')(app);

// reads from environment variables
// this is from the framework process
const PORT = process.env.PORT || 5005;
app.listen(PORT);