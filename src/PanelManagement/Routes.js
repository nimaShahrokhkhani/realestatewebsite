import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Configs from "./Configs/ConfigsManager";
import history from '../history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/PanelManagement" exact component={Configs} />
                </Switch>
            </Router>
        )
    }
}
