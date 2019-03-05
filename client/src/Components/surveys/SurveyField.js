import React from 'react';

export default ({input, label}) => {
    // input={...input} -> syntax for passing all the properties input has to input tag
    return(
        <div>
            <label>{label}</label>
            <input {...input}  />
        </div>
    );
};