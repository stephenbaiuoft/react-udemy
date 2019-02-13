import axios from 'axios'; // axios to make ajax request
import { FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
    // reduxThunk will pass in dispatch function as argument whenever a function is returned
    // from any action creator, in this case -> fetchUser
    
        // now the dispatch function can execute after the promise has returned
        const res = await axios.get('/api/current_user');
        // then we can dispatch the res 
        dispatch({type: FETCH_USER, payload: res});
    };
