const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// pull up the Survey schema from mongoose
const Survey = mongoose.model('surveys');

// default ES6 of exporting javascript
module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        // read key values from req ES6 syntax
       const { title, subject, body, recipients } = req.body; 
        
       const survey = new Survey({
            title: title, 
            subject, // abbreviated ES6 syntax
            body, 
            recipients: recipients.split(',').map(email => {  // split and return an array of objects
                return {email: email.trim() };  // use trim to get rid of white spaces
            }),
            _user: req.user.id,
            dateSent: Date.now()
       });
    });
};