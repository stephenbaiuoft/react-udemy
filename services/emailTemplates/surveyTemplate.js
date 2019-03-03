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
                  <a href="http://localhost:3000">Yes</a>
                 </div>                    
                 <div>
                  <a href="http://localhost:3000">Yes For Sure</a>
                 </div> 
                </div>
            </body>

        </html>
    
    `;
}; 