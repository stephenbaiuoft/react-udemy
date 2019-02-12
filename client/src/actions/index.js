import axios from 'axios'; // axios to make ajax request
import { FETCH_USER} from './types';

export const fetchUser = () => {
    // reduxThunk will pass in dispatch function as argument whenever a function is returned
    // from any action creator, in this case -> fetchUser
    return function(dispatch) {
        // now the dispatch function can execute after the promise has returned
        axios.get('/api/current_user')
            .then(res => dispatch(
                {type: FETCH_USER, payload: res}));
    };
};