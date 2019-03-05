import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Field is from redux-form 
// and it can render any HTML component

import SurveyField from './SurveyField';

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
]
// this.props.handleSubmit is from reduxForm lib
class SurveyForm extends Component {
    // define a rendering survey fields function
    // component={SurveyField} --> let Field know that we are rendering it with SurveyField    
    renderSurveyFields() {
        return (
            FIELDS.map(({label, name}) => {
                // built-in map function, you need to call return yeah!!!
                return (
                    <Field 
                        key={name}
                        label={label}
                        name={name}
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
                
                <form onSubmit={this.props.handleSubmit((values)=> {console.log(values)}) }>
                    {this.renderSurveyFields()}
                    <button type="submit">submit</button>
                </form>

            </div>

        );

    }
}


// reduxForm here is same as connect()(your_react_component) 
// --> so react props can talk to the store
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); 