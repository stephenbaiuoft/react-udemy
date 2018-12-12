const express = require('express'); // importing the express library, node.js is the runtime
// this is common.js module is the module that's supported by node.js framework for now
const app = express(); // this app object is used to set up configuration that runs the business logic

// a sample route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there blablba'});
});

// reads from environment variables
// this is from the framework process
const PORT = process.env.PORT || 5005;
app.listen(PORT);