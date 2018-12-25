// prod.js - production keys here!!, and this file need to be updated to heroku git 

// all the env vars are config in Heroku config vars, so yeah!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY   
}