const passport = require('passport');

module.exports = (app) => {
    // app.MethodName (Rounte Handler)
    // this is invoking the passport authentication flow
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
        // the relative /auth/google/callback that Google server calls will send back with some code
        // passport.authenticate('google') is takes it from here
        passport.authenticate('google') // use passport to authenticate the callback flow, which turns the code
        // into getting user's profile
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
            // so think of req as an object, and logout() is the method that passport attaches to req lol
            req.logout();
            res.send(req.user);
        }
    );
};