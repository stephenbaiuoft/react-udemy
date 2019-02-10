// capitalized first letter if it's exporting an component
// lower case if otherwise like exporting a bunch of functions

import React from 'react'; // ES2015 Module so we use import as supposed to use require for node.js
import {BrowserRouter, Route} from 'react-router-dom'; // react component
// BrowserRouter can ONLY have at most 1 child!

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    return (
        <div>
            <BrowserRouter> 
            <div>
                <Route path="/" component={Landing}/>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;