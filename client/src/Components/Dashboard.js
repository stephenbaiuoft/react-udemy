import React from 'react'; // bable converts ES6 to CommonJS under the hood
import { Link } from 'react-router-dom'; // Link tag

const Dashboard = () => {
    return (
        <div>
            Dashboard Component   
            <div className="fixed-action-btn">
                <Link to= "/surveys/new" class="btn-floating btn-large waves-effect waves-light red">
                    <i class="material-icons">add</i>
                </Link>        
            </div>
        </div>
    );
};

// default babel, which under the hood converts to CommonJS
export default Dashboard;