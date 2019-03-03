const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.mail {
    // default constructor keyword
    // {body, recipients} are deconstructed in this way, note we pass more than that 
    // in the first arugment we put -> new Mailer(survey, new SurveyTemplate(survey));
    constructor({subject, recipients}, content ) {
        super(); // call super due to extends helper.mail

        // note helper is global object -> can be accessed within this file
        // this.from_email --> defining private class members 
        this.from_email = new helper.Email('no-reply@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body); // addContent is helper.mail method
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(  
            // {email} is destructing -> taking components u interested in
            ( {email} ) => {
                return new helper.Email(email);
            }
        ); 
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSetting(trackingSettings);
    }

    // helper function
    addRecipients() {
        // this is the template
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personliaze.addTo(recipient)
        });

        // helper.mail base class method        
        this.addPersonalization(personalize);
    }
    
}

// export this module s.t it could be used in other files
module.exports = Mailer;