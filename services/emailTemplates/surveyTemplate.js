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
                 <h3>Bai you have to make it happen</h3>
                 <p>Please continuously work hard</p>
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