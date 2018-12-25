const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys'); // do not need the extension 
const mongoose = require('mongoose');

// this is getting the User collection from mongoose
const User = mongoose.model('users');


// sending out the user.id to client
passport.serializeUser( 
    (user, done) => {
        done(null, user.id);// this is the shortcut to mongodb, _id, $_uid property
    }
);

// deserializeUser (taking in the request from the client end)
passport.deserializeUser(
    (id, done) => {
        User.findById(id).then( (user) => {
            done(null, user);
        });
});

// new GoogleStrategy defaults to use 'google' as internal identifier
passport.use(
    new GoogleStrategy({ // configuration options JSON
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true // letting google strategy know that you can trust the proxy(the proxy that heroku internally runs)
    }, 
    (accessToken, refreshToken, profile, done ) => { // callback function that executes after the callback flow!
        User.findOne({googleId: profile.id}) 
            .then((existingUser) => { // js promise chained on then(func)
                if (existingUser) {
                    // a record already exists
                    done(null, existingUser); // first arg -> error if any
                } else {
                    new User({googleId: profile.id})
                    .save() // chain on then -> due to async name
                    .then( user => done(null, user) ); // call back from save() method 
                }
            });

    })
); 