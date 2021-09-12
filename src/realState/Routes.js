import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";
import Home from "./Home/Home.js";
import realstatePanel from "./realstatepanel/realstatePanel.js";
import advertisingPage from "./AdvertisingPage/advertisingPage.js";
import changePassword from "./ChangePassword/changePassword.js";
import loginRegister from "./LoginRegister/loginRegister.js";
import bookMarks from "./BookMarks/bookMarks.js";
import profile from "./Profile/profile.js";
import fileSearchTable from "./FileSearchTable/fileSearchTable.js";
import properties from "./Properties/properties.js";
import propertyPage from "./PropertyPage/propertyPage.js";
import submit from "./Submit/submit.js";
import contact from "./Contact/contact.js";
import bestAgencies from "./BestAgencies/bestAgencies.js";
import history from '../history';
import ScrollToTop from "./ScrollToTop";
import loginPanel from "./LoginPanel/loginPanel";
import fileDetail from "./FileDetail/fileDetail";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <ScrollToTop>
                    <Switch>
                        <Route path="/realstate" exact component={Home}/>
                        <Route path="/realstate/login" component={loginRegister}/>
                        <Route path="/realstate/loginPanel" component={loginPanel}/>
                        <Route path="/realstate/advertise" component={advertisingPage}/>
                        <Route path="/realstate/realstatePanel" component={realstatePanel}/>
                        <Route path="/realstate/submitAdvertise" component={submit}/>
                        <Route path="/realstate/submitAdvertise" component={submit}/>
                        <Route path="/realstate/contact" component={contact}/>
                        <Route path="/realstate/bestAgencies" component={bestAgencies}/>
                        <Route path="/realstate/profile" component={profile}/>
                        <Route path="/realstate/fileSearchTable" component={fileSearchTable}/>
                        <Route path="/realstate/fileDetail" component={fileDetail}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}
