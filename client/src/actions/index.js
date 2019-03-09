import axios from 'axios'; // axios to make ajax request
import { FETCH_USER, FETCH_SURVEYS} from './types';

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

// immediate action creator --> no need to dispatch in terms of middleware
export const submitSurvey = ( values, history) => async dispatch => {
        const res = await axios.post('/api/surveys', values);
        // now  we also need to re-direct back to some page, 
        // but 1. we dont have res.redirect 2. we dont have the react component to
        // so we use history

        history.push('/surveys')
        
        // res.data --> data is the default key for the backend
        dispatch({type: FETCH_USER, payload: res.data });
};


export const fetchSurveys = () => async dispatch => {
        const res = await axios.get('/api/surveys');

        // res.data --> data is the default key for the backend
        // payload is the key when corresponding reducer takes the data
        dispatch({type: FETCH_SURVEYS, payload: res.data.surveys });
};