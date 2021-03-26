import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
import Home from "./Home/Home.js";


import history from '../history';
import ScrollToTop from "./ScrollToTop";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <ScrollToTop>
                    <Switch>
                        <Route path="/Market" exact component={Home}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}
