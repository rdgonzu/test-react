import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TestsComponent from './components/TestsComponent';
import MyFirstComponent from './components/MyFirstComponent';
import Movies from './components/Movies';
import Error from "./components/Error";
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class Router extends Component {
    render () {
        return (
            <BrowserRouter>

                <Header></Header>
                <Slider title="This is a React example"></Slider>

                <div className="center">

                    <section id="content">

                        <section className="components">

                            <Switch>

                                <Route exact path="/" component={Movies}></Route>

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

                        </section>

                    </section>

                    <Sidebar></Sidebar>

                    <div className="clearfix"></div>

                </div>

                <Footer></Footer>

            </BrowserRouter>
        );
    }
}

export default Router;