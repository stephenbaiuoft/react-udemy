// named with authReducer to indicate this file is of functions
// this is a pure reducer function
export default function(state= {}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

// default keyword
// export default function(){} can be 
// used when the function has no name. There can only be one default export in a file