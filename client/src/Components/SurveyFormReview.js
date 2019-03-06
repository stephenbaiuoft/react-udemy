import React from 'react';
import { connect } from 'react-redux';

// define a functional jsx component
// 因为SurveyFormReview是functional component 所以 this.props不工作
// 所以argument就是deconstruct出来的 {onCancel} 放入SurveyFormReview的() parentheses 之中
const SurveyFormReview = ( {onCancel} ) => {
    return (
        <div>
            <h5>Please confirm your results</h5>
            <button className="blue darken-3 btn-flat"
                onClick={onCancel}>
                Back
            </button>


        </div>
    );
};

// mapStateToProps
function mapStateToProps(state) {
    console.log(state); // for debugging

    // yeah --> state.form.surveyForm.values is where the FORM object stores all the values
    return {surveyValues: state.form.surveyForm.values };
}

// now your element can have all the props set up
export default connect(mapStateToProps)(SurveyFormReview);