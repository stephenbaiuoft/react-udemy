const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe',
        requireLogin, // the middleware that checks for requireLogin logic 
        
        async (req, res) => { // added async syntax because by default the stripe.charges.create
            //   has a callback function
            // console.log(req.body); req.body is bodyParse property as said in the doc

            // the following is stripe.charges.create() method
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                description: 'emaily service used',
                source: req.body.id // req.body, and we'are interested in getting the id property, in this case 
                // tok_1E5B76KUOmv1PNzClYx5Iriq
            });

            // user data is attached to request by passport module, deserializeUser part
            req.user.credits += 5;
            const user = await req.user.save(); // this saves the changes and updates the database
            // send back the new user data


            // note you can have as many middlewares as you want, but
            // you have to call res.send() at the last method
            res.send(user);
        });
};


/* req.body sample is like the following
0] { id: 'tok_1E5B76KUOmv1PNzClYx5Iriq',
[0]   object: 'token',
[0]   card:
[0]    { id: 'card_1E5B76KUOmv1PNzCj8zUj75r',
[0]      object: 'card',
[0]      address_city: null,
[0]      address_country: null,
[0]      address_line1: null,
[0]      address_line1_check: null,
[0]      address_line2: null,
[0]      address_state: null,
[0]      address_zip: null,
[0]      address_zip_check: null,
[0]      brand: 'Visa',
[0]      country: 'US',
[0]      cvc_check: 'pass',
[0]      dynamic_last4: null,
[0]      exp_month: 10,
[0]      exp_year: 2020,
[0]      funding: 'credit',
[0]      last4: '4242',
[0]      metadata: {},
[0]      name: 's@gmail.com',
[0]      tokenization_method: null },
[0]   client_ip: '126.63.175.68',
[0]   created: 1550492448,
[0]   email: 's@gmail.com',
[0]   livemode: false,
[0]   type: 'card',
[0]   used: false }
*/