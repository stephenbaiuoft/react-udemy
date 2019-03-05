import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // Field is from redux-form 
// and it can render any HTML component

class SurveyForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit((values)=> {console.log(values)}) }>
                    <Field name="surveyTitle" type="text" component="input" />
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