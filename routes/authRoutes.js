const passport = require('passport');

module.exports = (app) => {
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

    // route to get current_user
    app.get(
        '/api/current_user',
        (req, res) => {
            res.send(req.user);
        }
    );
};