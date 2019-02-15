import {FETCH_USER} from '../actions/types';

// named with authReducer to indicate this file is of functions
// this is a pure reducer function --> dispatch sends to all reducer methods
export default function(state= null, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
            // it was {type: FETCH_USER, payload: res.data}
        default:
            return state;
    }
}

// default keyword
// export default function(){} can be 
// used when the function has no name. There can only be one default export in a file