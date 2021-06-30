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
                                <NavLink to="/home" activeClassName="active">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="tests-component" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/test-with/params/René/González" activeClassName="active">Form</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-first-component" activeClassName="active">Page</NavLink>
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