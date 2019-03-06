const keys = require('../../config/keys');
const redirectDomain = keys.redirectDomain;

// function React component 
module.exports = (survey) => {
    // ${} template literals --> used in ``

    // return '<div>' + survey.body + '</div>';
    return `
        <html>
            <body>
                <div style="text-align: center;">

                 <p>${survey.body}</p>
                 <div>
                  <a href="${redirectDomain}/api/surveys/thanks">Yes</a>
                 </div>                    
                 <div>
                  <a href="${redirectDomain}/api/surveys/thanks">Yes For Sure</a>
                 </div> 
                </div>
            </body>

        </html>
    
    `;
}; 