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
import advertiseDetail from "./AdvertiseDetail/advertiseDetail";
import realStateProfile from "./RealStateProfile/realStateProfile";
import BlogManager from "./Blogs/BlogManager";
import Login from "./Login/login";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={loginRegister}/>
                        <Route path="/loginPanel" component={loginPanel}/>
                        <Route path="/advertise" component={advertisingPage}/>
                        <Route path="/realstatePanel" component={realstatePanel}/>
                        <Route path="/submitAdvertise" component={submit}/>
                        <Route path="/contact" component={contact}/>
                        <Route path="/bestAgencies" component={bestAgencies}/>
                        <Route path="/profile" component={profile}/>
                        <Route path="/fileSearchTable" component={fileSearchTable}/>
                        <Route path="/fileDetail" component={fileDetail}/>
                        <Route path="/advertiseDetail" component={advertiseDetail}/>
                        <Route path="/realStateProfile" component={realStateProfile}/>
                        <Route path="/changePassword" component={changePassword}/>
                        <Route path="/blogManager" component={BlogManager}/>
                        <Route path="/panelManagerLogin" component={Login}/>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}
