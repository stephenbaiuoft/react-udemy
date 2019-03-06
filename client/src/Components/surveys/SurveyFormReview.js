import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router';

// define a functional jsx component
// 因为SurveyFormReview是functional component 所以 this.props不工作
// 所以argument就是deconstruct出来的 {onCancel} 放入SurveyFormReview的() parentheses 之中

// 所以formValues 是从mapStateToProps return 出来的
// 这个history是 withRouter middleware会pass给你的
const SurveyFormReview = ( {onCancel, formValues, submitSurvey, history} ) => {

    const reviewFields = _.map(formFields, (field) => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your results</h5>
            <div  style={{ marginBottom: '20px' }}>
                { reviewFields }
            </div>
            
            <button className="light-blue darken-3 btn-flat left white-text"
                onClick={onCancel}>
                Back
            </button>

            {/* 所以把history这个object 再直接放入 submitSurvey这个method中 */}
            <button className="yellow darken-3 btn-flat right white-text"
                
                onClick={() =>{submitSurvey(formValues, history)} }>
                Send
                <i className="material-icons right">email</i> 
            </button>

        </div>
    );
};

// mapStateToProps
function mapStateToProps(state) {
    console.log(state); // for debugging

    // yeah --> state.form.surveyForm.values is where the FORM object stores all the values
    return {formValues: state.form.surveyForm.values };
}

// now your element can have all the props set up
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));