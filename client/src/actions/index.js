import axios from 'axios'; // axios to make ajax request
import { FETCH_USER} from './types';

// fetchUser is an action creator, and 
// we would use connect() module to put every action creator/selected ones 
// to react component/class prop--> as this.props.the_action_creator_name
export const fetchUser = () => async dispatch => {
    // reduxThunk will pass in dispatch function as argument whenever a function is returned
    // from any action creator, in this case -> fetchUser
    
        // now the dispatch function can execute after the promise has returned
        const res = await axios.get('/api/current_user'); // axios is an ajax request
        // then we can dispatch the res 
        dispatch({type: FETCH_USER, payload: res.data}); // only res.data which contains the info
        // note -> res.data refers to User type data, which is really just user
};

// this is the action creator for payments
export const handleToken = (token) => async dispatch => {
    
        // for /api/stripe, we probably need to verify this token or something, otherwise 
        const res = await axios.post('/api/stripe', token); // axios is an ajax request
        // then we can dispatch the res 
        dispatch({type: FETCH_USER, payload: res.data}); // only res.data which contains the info
        
        // due to type: FETCH_USER defined here, this would invoke the same pureReducer method
        
};


// this is the action creator for payments
export const handleSurveys = () => async dispatch => {
    
        // for /api/stripe, we probably need to verify this token or something, otherwise 
        const res = await axios.post('/api/surveys'); // axios is an ajax request
        // then we can dispatch the res 
        dispatch({type: FETCH_USER, payload: res.data}); // only res.data which contains the info                
};
