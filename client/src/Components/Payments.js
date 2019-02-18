import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name = "Emaily"
                description = "Added 5 dollars for 5 credits"
                amount = {500}
                token = { // call back function?
                    (token) => {
                        // log the token out for now
                        this.props.handleToken(token);
                    }
                }
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                >
            <button className='btn' >
                Add Credits 
            </button> 

            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);