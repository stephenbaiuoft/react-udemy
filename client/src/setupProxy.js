const proxy = require('http-proxy-middleware')

// proxy to re-route relative paths like 'auth/google' to https://localhost:5005 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5005' })); // re-routes relative path to localhost:5005
    app.use(proxy('/api/*', { target: 'http://localhost:5005' }));
}
