import React from 'react';

export default ({input}) => {
    // input={...input} -> syntax for passing all the properties input has to input tag
    return(
        <div>
            <input {...input} />
        </div>
    );
};