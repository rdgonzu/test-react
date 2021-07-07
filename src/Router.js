import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TestsComponent from './components/TestsComponent';
import MyFirstComponent from './components/MyFirstComponent';
import Error from "./components/Error";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Blog from "./components/Blog";
import Form from "./components/Form";

class Router extends Component {
    render () {
        return (
            <BrowserRouter>

                <Header></Header>

                <Switch>

                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/blog" component={Blog}></Route>

                    <Route exact path="/blog/article/:id" render={(props) => {

                        const id = props.match.params.id;

                        return (
                            <h2>Article ID: {id}</h2>
                        );

                    }} />

                    <Route exact path="/form" component={Form}></Route>

                    <Route exact path="/my-first-component" component={MyFirstComponent}></Route>
                    
                    <Route exact path="/tests-component" component={TestsComponent}></Route>

                    <Route exact path="/test-with/params/:name/:lastName?" render={(props) => {

                        const name = props.match.params.name;
                        const lastName = props.match.params.lastName;

                        return (
                            <h2>{name} {lastName}</h2>
                        );

                    }} />

                    <Route component={Error}></Route>

                </Switch>

                <Footer></Footer>

            </BrowserRouter>
        );
    }
}

export default Router;