const express = require('express'); // importing the express library, node.js is the runtime
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys'); // do not need the extension 

// this is common.js module is the module that's supported by node.js framework for now
const app = express(); // this app object is used to set up configuration that runs the business logic

// new GoogleStrategy defaults to use 'google' as internal identifier
passport.use(new GoogleStrategy({ // configuration options JSON
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    accessToken => { // callback function that executes after the callback flow!
        console.log(accessToken);
    }
  )
);

// app.MethodName (Rounte Handler)
app.get(
    '/auth/google',
    passport.authenticate('google', // 'google' is GoogleStrategy default internal identifier
    { 
        scope: ['profile', 'email']  // configuration that we need
    } )
);

// route to handle requests coming to /auth/google/callback path
app.get(
    '/auth/google/callback',
    passport.authenticate('google') // use passport to authenticate the callback flow
);

// reads from environment variables
// this is from the framework process
const PORT = process.env.PORT || 5005;
app.listen(PORT);