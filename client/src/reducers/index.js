import {combineReducers} from 'redux';
import authReducer from './authReducer'; // default import

// reducers that are tied to the store variable through
// this combineReducers method
export default combineReducers({
    auth: authReducer    
});