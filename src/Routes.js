import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import PanelManagement from "./PanelManagement/PanelManagement";
import Market from "./market/Market";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Market" component={Market}/>
                    <Route path="/PanelManagement" component={PanelManagement}/>
                </Switch>
            </Router>
        )
    }
}
