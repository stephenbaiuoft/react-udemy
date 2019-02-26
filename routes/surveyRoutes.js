const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

// default ES6 of exporting javascript
module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        
    });
};