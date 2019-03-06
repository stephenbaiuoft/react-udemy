import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Field is from redux-form 
// and it can render any HTML component
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import surveyFields from './formFields';

// this.props.handleSubmit is from reduxForm lib
class SurveyForm extends Component {
    // define a rendering survey fields function
    // component={SurveyField} --> let Field know that we are rendering it with SurveyField    
    renderSurveyFields() {
        return (
            surveyFields.map(({label, name}) => {
                // built-in map function, you need to call return yeah!!!
                return (
                    <Field 
                        key={name}
                        label={label}
                        name={name} // note name prop is passed to values for this.props.handleSubmit
                        type="text"
                        component={SurveyField}
                    />
                )
            })
        );
    }

    render() {
        return (
            <div>                    
                {/*这里就是 this.props.onSurveySubmit is then called --> onSurveySubmit callback prop*/}
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderSurveyFields()}

                    <Link to="/surveys" className="red left btn waves-effect waves-light">
                        Cancel
                        <i className="material-icons right">cancel</i>
                    </Link>
                    <button className="waves-effect waves-light blue right btn" type="submit" name="action">
                        Next
                        <i className="material-icons right">navigate_next</i>
                    </button>
                </form>

            </div>

        );

    }
}

// need function keyword, but you don't need it within a class body hh
function validate(values){
    // errors if not empty, then reduxForm will have the errors and you can display any
    const errors = {};

    // errors.emails --> setting the attribute
    // values.emails --> getting the value content
    errors.emails = validateEmails(values.emails || '');    
    _.each(surveyFields, ({name, label}) => {
        if (!values[name]) {
            // errors[name] --> putting down the {key_variable: value_content} 
            errors[name] = 'You must provide' + label;
        }
    }); 


    return errors;
}

// reduxForm here is same as connect()(your_react_component) 
// --> so react props can talk to the store
export default reduxForm({
    validate,
    form: 'surveyForm',
    //surveyForm is the key or the nameSpace 

    destroyOnUnmount: false
})(SurveyForm); 

// for other JSX components, when you have connect(mapStateToProps)(jsx_component), 
// --> you can then access state.form.surveyForm.values (which contains all values in your form)