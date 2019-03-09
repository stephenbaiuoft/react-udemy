import React from 'react'; // bable converts ES6 to CommonJS under the hood
import { Link } from 'react-router-dom'; // Link tag
import SurveysList from './SurveysList';

const Dashboard = () => {
    return (
        <div>

            <div >
                <SurveysList />
            </div>
            <div className="fixed-action-btn">
                <Link to= "/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </Link>        
            </div>
        </div>
    );
};

// default babel, which under the hood converts to CommonJS
export default Dashboard;