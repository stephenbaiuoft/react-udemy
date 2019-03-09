const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    yesforsure: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: {type: Date, default: null}
},
    { strict: false }// default to false
);

// create a new collection called 'surveys' and use the surveySchema if the collection does not exist
// mongoose will not re-create if the 'surveys' collection exists already
mongoose.model('surveys', surveySchema);