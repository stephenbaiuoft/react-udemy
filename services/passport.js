const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // do not need the extension 

// new GoogleStrategy defaults to use 'google' as internal identifier
passport.use(
    new GoogleStrategy({ // configuration options JSON
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    accessToken => { // callback function that executes after the callback flow!
    console.log(accessToken);
    })
);