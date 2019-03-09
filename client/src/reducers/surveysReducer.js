import {FETCH_SURVEYS} from '../actions/types';

// named with surveysReducer to indicate this retrieves surveys
// this is a pure reducer function --> dispatch sends to all reducer methods
export default function(state= [], action) {
    console.log(action);
    switch(action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            // default state is []
            return state;
    }
}