import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

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
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Form</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-first-component">Page</NavLink>
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