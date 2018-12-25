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
            // passport automatically attach user to the request
            res.send(req.user);
        }
    );
    
    // route to logout
    app.get(
        '/api/logout',
        (req, res) => {
            // logout() is also a function that passport automatically attach to request
            req.logout();
            res.send(req.user);
        }
    );
};