import React from 'react';

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

export default SurveyFormReview;