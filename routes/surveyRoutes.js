const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/Mailer');

// pull up the Survey schema from mongoose
const Survey = mongoose.model('surveys');


// default ES6 of exporting javascript
module.exports = (app) => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('remember and have to do it 90 days');
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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

       const mailer = new Mailer(survey, surveyTemplate(survey));

       try {
        await mailer.send();
        // save the survey --> note it's exactly how this survey schema is in the database
        await survey.save();
 
        // subtract 0.1 credits
        req.user.credits -= 0.1; 
        // update the user profile --> and of course get the updated user version
        const user = await req.user.save();    
        // send back the updated user --> s.t we know the credit has changed        
        res.send(user);       
       } catch (err) {
        res.status(422).send(err);
       }


    });
};