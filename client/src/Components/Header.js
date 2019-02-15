import React, {Component} from 'react';
import {connect} from 'react-redux';

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
                return 'im not logged in';
            default:
                return 'logged in';
        }

    }

    render() {      
        return ( 
            <nav>
                <div className="nav-wrapper">
                 <a className="left brand-logo">
                Emaily
                 </a>
                 <ul className="right">
                    <li>
                        {this.renderContent()}
                    </li>
                 </ul>
                </div>
            </nav>
            
        );
    }
}

function mapStateToProps(state) {
    // auth is the state type
    return {auth: state.auth};
}

// export default Header --> important or we can't import it lolll
export default connect(mapStateToProps)(Header);