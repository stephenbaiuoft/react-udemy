import React from 'react';

// functional component --> default or we can do the following
export default function() {
    return (
        <div style = { {textAlign: 'center'} }>
            <h1>
                Emaily
            </h1>
            Collect feedbacks from your users!
        </div>
    );
};


// the following is create a const functional component and export it
// const Landing = () => {
//     return (
//         <div style = { {textAlign: 'center'} }>
//             <h1>
//                 Emaily
//             </h1>
//             Collect feedbacks from your users!
//         </div>
//     );
// }

// export default Landing;