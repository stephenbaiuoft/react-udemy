import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer'; // default import


// reducers that are tied to the store variable through
// this combineReducers method
export default combineReducers(
    {
       auth: authReducer,  
       form: reduxForm // reduxForm has to use form as the key to connect
    }
);