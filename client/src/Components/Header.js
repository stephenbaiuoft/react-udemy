import React, {Component} from 'react';

// creates a react class component, so it extends a class Component
// of course you can do a function component
// note that render(){ return ( <div>make your component here</div>)} is a react component

// this file imports some css library
class Header extends Component {
    render() {
        return ( 
            <nav>
                <div className="nav-wrapper">
                 <a className="left brand-logo">
                Emaily
                 </a>
                 <ul className="right">
                    <li>
                        <a>Login With Google</a>
                    </li>
                 </ul>
                </div>
            </nav>
            
        );
    }
}

// export default Header --> important or we can't import it lolll
export default Header;