import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

// creates a react class component, so it extends a class Component
// of course you can do a function component
// note that render(){ return ( <div>make your component here</div>)} is a react component

// this file imports some css library
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'still deciding';
            case false:
                return <li><a href='/auth/google'>Login With Google</a></li>;
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="3" style={ {margin: '0 10px'} }>
                        Credits: {this.props.auth.credits.toFixed(2)}
                    </li>,
                    <li key="2"><a href = '/api/logout'>Log Out</a></li>
                ]; 
                // can't use <Link> </Link> as other req.redirect doesn't work?
        }

    }

    render() {      
        return ( 
            <nav>
                <div className="nav-wrapper">
                 <Link 
                 to = {this.props.auth ? '/surveys': '/'}
                 className="left brand-logo"
                 >
                Emaily
                 </Link>
                 <ul className="right">
                    {this.renderContent()}
                 </ul>
                </div>
            </nav>
            
        );
    }
}

// maps the state from combineReducer to the react, so
// later in react component, we can have this.props.auth because we return {auth: state.xxxx}
function mapStateToProps(state) {
    // auth is the state type
    return {auth: state.auth};
}

// export default Header --> important or we can't import it lolll
export default connect(mapStateToProps)(Header);