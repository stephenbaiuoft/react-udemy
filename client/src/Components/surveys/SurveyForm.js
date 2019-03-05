import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Field is from redux-form 
// and it can render any HTML component

import SurveyField from './SurveyField';

// this.props.handleSubmit is from reduxForm lib
class SurveyForm extends Component {
    // define a rendering survey fields function
    // component={SurveyField} --> let Field know that we are rendering it with SurveyField    
    renderSurveyFields() {
        return (
            <div>
                <Field type="text" name="title" component={SurveyField}/>
            </div>
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