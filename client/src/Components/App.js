// capitalized first letter if it's exporting an component
// lower case if otherwise like exporting a bunch of functions

import React, {Component} from 'react'; // ES2015 Module so we use import as supposed to use require for node.js
import {BrowserRouter, Route} from 'react-router-dom'; // react component
// BrowserRouter can ONLY have at most 1 child html tag! 

import {connect} from 'react-redux'; // connect module/function allows certain components to call action creators
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter> 
                <div>
                    <Header />   
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>                        
                </div>
                </BrowserRouter>
            </div>
        );
    }
};

// actions inlcude the action creator, fetchUser, 
// and connect makes it to the react-component
export default connect(null, actions)(App); 