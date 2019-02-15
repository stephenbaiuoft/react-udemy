const proxy = require('http-proxy-middleware')

// proxy to re-route relative paths like 'auth/google' to http://localhost:5000
module.exports = function(app) {
    app.use(proxy('/auth/google', 
           { target: 'http://localhost:5000' }));// re-routes relative path to localhost:5000
    app.use(proxy('/api/*',
           { target: 'http://localhost:5000' }));
}
