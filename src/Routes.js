import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import PanelManagement from "./PanelManagement/PanelManagement";
import RealState from "./realState/RealState";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={RealState}/>
                    <Route path="/panelManagement" component={PanelManagement}/>
                </Switch>
            </Router>
        )
    }
}
