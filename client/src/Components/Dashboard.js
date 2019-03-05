import React from 'react'; // bable converts ES6 to CommonJS under the hood

const Dashboard = () => {
    return (
        <div>
            Dashboard Component   
            <div className="fixed-action-btn">
                <a class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">add</i></a>        
            </div>
        </div>
    );
};

// default babel, which under the hood converts to CommonJS
export default Dashboard;