import {combineReducers} from 'redux';
import authReducer from './authReducer'; // default import

export default combineReducers({
    auth: authReducer    
});