const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // do not need the extension 
const mongoose = require('mongoose');

// this is getting the User collection from mongoose
const User = mongoose.model('users');


// passport.serializeUser is called, with the custom callback function you define
// right after the asyc(accessToken, refreshToken, profile, x) calls the done(null, existingUser)
// serializeUser is used to do the Set-Cookie function
passport.serializeUser( 
    (user, done) => {
        // first argument to done is error function that you will write the cases to handle
        done(null, user.id); // user.id is used as an identifying info
        // second argument --> user.id the (mongo db's id instead of G's profile id -> to avoid duplicates from other authentication methods)

    }
);

// deserializeUser (is called whenever the client makes a request to our backend server)
// note that cookie (set as user.id earlier in serializeUser)
// , which is also & always passed in the cookie, so we can get the id info

// the first argument, (id), corresponds to the key of the user object that was given to the done(null, user.id)
passport.deserializeUser(
    (id, done) => {
        User.findById(id).then( (user) => {
            done(null, user);
        });
});

// new GoogleStrategy defaults to use 'google' as internal identifier
passport.use(
    new GoogleStrategy({ // configuration options JSON
    clientID: keys.googleClientID,  // googleClientId, googleClientSecret are Google Auth APIs
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // letting google strategy know that you can trust the proxy(the proxy that heroku internally runs)
    }, 
    // the call back after the code exchange with passport.authenticate('google')
    // changed to async + await syntax instead of promises, which is much easier/cleaner as compared to promises 
    async (accessToken, refreshToken, profile, x ) => { // callback function that executes after the callback flow!
        const existingUser = await User.findOne({googleId: profile.id});
        if (existingUser) {
            // console.log(existingUser);
            // a record already exists
            done(null, existingUser); // first arg -> error if any
        }
        else {
            // console.log("none new user was found");
            const user = await new User({googleId: profile.id});
            done(null, user); // call back from save() method   
        }      
    })
);