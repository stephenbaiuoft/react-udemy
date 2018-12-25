// figure out what set of credentials to return

if (process.env.NODE_ENV == 'production') { // process.env.NODE_ENV is the node.js default env variable
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys
    module.exports = require('./dev'); // pull from the dev and pass it out to whoever asks for this exports
}
