import React from 'react';

// values being passed to SurveyField deconstructed into the following
export default ({input, label, meta: {error, touched}}) => {
    // input={...input} -> syntax for passing all the properties input has to input tag
    return(
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}} />
            <div className="red-text" style={{ marginBottom: '20px' }}> 
                {touched && error}
            </div>
        </div>
    );
};