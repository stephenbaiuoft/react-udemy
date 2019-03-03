const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    // default constructor keyword
    // {body, recipients} are deconstructed in this way, note we pass more than that 
    // in the first arugment we put -> new Mailer(survey, new SurveyTemplate(survey));
    constructor({subject, recipients}, content ) {
        super(); // call super due to extends helper.mail

        this.sgApi = sendgrid(keys.sendGridKey);
        // note helper is global object -> can be accessed within this file
        // this.from_email --> defining private class members 
        this.from_email = new helper.Email('no-reply@juwang.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        // so surveyTemplate is the one that returns HTML content
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
        this.addTrackingSettings(trackingSettings);
    }

    // helper function
    addRecipients() {
        // this is the template
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient)
        });

        // helper.mail base class method        
        this.addPersonalization(personalize);
    }

    // take this mailer and send to sendgrid ( so have mails 
    // sent to recipients)
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON() //body  to JSON format
        });

        // now send to sgApi
        const response = await this.sgApi.API(request);
        return response;
    }


}

// export this module s.t it could be used in other files
module.exports = Mailer;