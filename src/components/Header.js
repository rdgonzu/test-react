import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {

    render () {

        return (
            <header id="header">
                <div className="center">

                    {/* LOGO */ }
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Testing</strong> React
                        </span>
                    </div>
                    
                    {/* MENU */ }
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Form</a>
                            </li>
                            <li>
                                <a href="#">Page</a>
                            </li>
                        </ul>
                    </nav>

                    {/* CLEAN FLOATED ELEMENTS */ }
                    <div className="clearfix"></div>

                </div>
            </header>
        );

    }

}

export default Header;