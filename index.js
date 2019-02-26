const express = require('express'); // importing the express library, node.js is the runtime
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');  // enabling cookie which allows whatever we put in serializeUser so that 
                                            // we can later use deserializeUser to get info
const passport = require('passport');
const bodyParser = require('body-parser');

// bootstrap the database
require('./models/User'); // loads the User.js 
require('./models/Survey'); // loads the Survey.js
require('./services/passport'); // no exporting so no need to define module.exports = in passport.js


// make connection to mongoose
const options = {
    useNewUrlParser: true
};
mongoose.connect(keys.mongoURI, options);

const app = express(); // this app object is used to set up configuration that runs the business logic
 

// app.use  --> is how we hook up the middleware to react

app.use (bodyParser.json()); // allows react to parse in post data as an object
//, otherwise by default react won't see any post request with data read as object


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
require('./routes/billingRoutes')(app);

// Routing in Production
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // for example, the main.js file or main.css file 
    // under the given directory, which would be anything you specify
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// reads from environment variables
// this is from the framework process
const PORT = process.env.PORT || 5000;
app.listen(PORT);