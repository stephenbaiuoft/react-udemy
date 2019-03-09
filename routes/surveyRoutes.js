const { URL } = require( 'url' );
const _ = require('lodash');
const Path = require('path-parser').default;

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId; 
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

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({_user: req.user.id})
                                    .select({recipients: false}); // dont include recipients

        res.send({surveys});
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice/');
        console.log(req.body);

        const events = _.chain(req.body)
            .map(({email, url}) => {
                const pathName = new URL(url).pathname;
                console.log(pathName);

                const match = p.test(pathName);
                if (match) {
                    return {email, surveyId: match.surveyId, choice: match.choice};
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                //console.log("<",email.trim(),"> <",choice.trim(),">");
                Survey.findOneAndUpdate(
                    {
                        "_id": surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    },
                    {
                        "$set": {"title": "this is trying out for the new subject title change"}
                    }
                ).exec((error, result) => {
                    if (!error) {
                        console.log(result);
                    }

                }).save();
              })            
            .value();

        console.log(events);
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