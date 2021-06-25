import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TestsComponent from './components/TestsComponent';
import MyFirstComponent from './components/MyFirstComponent';
import Movies from './components/Movies';
import Error from "./components/Error";

class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={Movies}></Route>

                    <Route exact path="/my-first-component" component={MyFirstComponent}></Route>
                    
                    <Route exact path="/tests-component" component={TestsComponent}></Route>

                    <Route component={Error}></Route>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;