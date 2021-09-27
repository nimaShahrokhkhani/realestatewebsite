import React from 'react';
import './RealState.css';
import Routes from './Routes';
import {withTranslation, Trans} from 'react-i18next'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBox from '../components/searchBar/SearchBox'
import makeExpanding from '../components/searchBar/expanding-animation';
import {connect} from "react-redux";
import {setUser, setState} from "../components/redux/actions";
import './css/style.css';
import './css/color.css';
import 'react-awesome-slider/dist/styles.css';
import $ from 'jquery';
import ScriptTag from 'react-script-tag';
import * as ReactDOM from "react-dom";
// import Services from "../utils/Services";

const ExpandingSearchBox = makeExpanding(SearchBox);

class RealState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    onLoginClick = () => {
        if (this.props.location.pathname !== "/realstatePanel") {
            this.props.history.push({
                pathname: '/login'
            });
        } else {
            this.props.history.push({
                pathname: '/loginPanel'
            });
        }
        this.clearAllMenuSelect();
    };

    closeHamburger() {
        document.getElementById('hamburgerBtn').classList.remove("is-active");
    }

    onHomePageClick = () => {
        this.closeHamburger();
        this.props.history.push({
            pathname: '/'
        });
        this.changeCurrentMenu('/');
    };

    onAdvertisingPageClick = () => {
        this.closeHamburger();
        this.props.history.push({
            pathname: '/advertise'
        });
        this.changeCurrentMenu('/advertise');
    };

    onRealstatePanelClick = () => {
        this.closeHamburger();
        this.props.history.push({
            pathname: '/realstatePanel'
        });
        this.changeCurrentMenu('/realstatePanel');
    };
    onLogin = () => {
        this.props.history.push({
            pathname: '/login'
        });
        this.changeCurrentMenu('/login');
    };
    onRegisterClick = () => {
        this.props.history.push({
            pathname: '/login'
        });
        this.changeCurrentMenu('/login');
    };
    onMyProfile = () => {
        this.props.history.push({
            pathname: '/profile'
        });
        this.changeCurrentMenu('/profile');
    };
    onSubmit = () => {
        this.props.history.push({
            pathname: '/submitAdvertise'
        });
        this.changeCurrentMenu('/submitAdvertise');
    };

    onSubmitAdvertiseClick = () => {
        this.props.history.push({
            pathname: '/submitAdvertise'
        });
        this.clearAllMenuSelect();
    };

    onContactClick = () => {
        this.closeHamburger();
        this.props.history.push({
            pathname: '/contact'
        });
        this.changeCurrentMenu('/contact');
    };

    onBestAgenciesClick = () => {
        this.closeHamburger();
        this.props.history.push({
            pathname: '/bestAgencies'
        });
        this.changeCurrentMenu('/bestAgencies');
    };

    onProfileClick = () => {
        this.props.history.push({
            pathname: '/profile'
        });
        this.clearAllMenuSelect();
    };

    clearAllMenuSelect() {
        [...document.getElementsByName('loginContainer')].map(item => {
            item.innerText = 'ورود / ثبت نام';
        });
        [...document.getElementsByName('home')].map(item => {
            item.className = '';
        });
        [...document.getElementsByName('advertise')].map(item => {
            item.className = '';
        });
        [...document.getElementsByName('realStatePanel')].map(item => {
            item.className = '';
        });
        [...document.getElementsByName('contact')].map(item => {
            item.className = '';
        });
        [...document.getElementsByName('bestAgencies')].map(item => {
            item.className = '';
        });
    }

    changeCurrentMenu(pathName) {
        this.clearAllMenuSelect();
        switch (pathName || this.props.location.pathname) {
            case "/":
                [...document.getElementsByName('home')].map(item => {
                    item.className = 'current';
                });
                break;
            case "/advertise":
                [...document.getElementsByName('advertise')].map(item => {
                    item.className = 'current';
                });
                break;
            case "/realstatePanel":
                [...document.getElementsByName('realStatePanel')].map(item => {
                    item.className = 'current';
                });
                [...document.getElementsByName('loginContainer')].map(item => {
                    item.innerText = 'ورود به پنل املاک';
                });
                break;
            case "/contact":
                [...document.getElementsByName('contact')].map(item => {
                    item.className = 'current';
                });
                break;
            case "/bestAgencies":
                [...document.getElementsByName('bestAgencies')].map(item => {
                    item.className = 'current';
                });
                break;

        }
    }

    clickMenuEventListener = () => {
        document.getElementById('home').addEventListener('click', this.onHomePageClick);
        document.getElementById('advertise').addEventListener('click', this.onAdvertisingPageClick);
        document.getElementById('realStatePanel').addEventListener('click', this.onRealstatePanelClick);
        document.getElementById('bestAgencies').addEventListener('click', this.onBestAgenciesClick);
        document.getElementById('contact').addEventListener('click', this.onContactClick);

    };

    componentDidMount() {
        this.props.setState(JSON.parse(localStorage.getItem('state')));
        this.changeCurrentMenu();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(this.clickMenuEventListener, 5000)
    }

    isLoginPage() {
        if (this.props.location.pathname.includes('login')) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div id="wrapper">
                <header id="header-container">
                    <div className="clearfix"></div>
                    <div id="header">
                        <div className="container">
                            <div className="left-side">
                                <div id="logo">
                                    <a onClick={this.onHomePageClick}><img src={require("./image/logol.png")}
                                                                           alt=""/></a>
                                </div>
                                <div className="mmenu-trigger">
                                    <button id='hamburgerBtn' className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
                                    </button>
                                </div>
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">

                                        <li><a id='home' name='home' className="current"
                                               onClick={this.onHomePageClick}>خانه</a>

                                        </li>

                                        <li><a id='advertise' name='advertise' onClick={this.onAdvertisingPageClick}>آگهی
                                            ها</a>

                                        </li>

                                        <li><a id='realStatePanel' name='realStatePanel'
                                               onClick={this.onRealstatePanelClick}>پنل املاک</a>

                                        </li>
                                        <li><a id='bestAgencies' name='bestAgencies' onClick={this.onBestAgenciesClick}>آژانس
                                            برتر </a>

                                        </li>

                                        <li><a id='contact' name='contact' onClick={this.onContactClick}> تماس با ما</a>

                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                            {!this.isLoginPage() ?
                                <div className="right-side">
                                    <div className="header-widget">
                                        {(this.props.user && this.props.user.username) ?
                                            <a id="loginContainer" className="sign-in-username"
                                               onClick={this.onProfileClick}>
                                                {this.props.user.username} خوش آمدید</a> :
                                            <a id="loginContainer" onClick={this.onLoginClick} className="sign-in">
                                                {this.props.location.pathname === "/realstatePanel" ? 'ورود به پنل املاک' : 'ورود / ثبت نام'}
                                            </a>}
                                        <a id="userContainer" href="my-profile.html" className="sign-in" hidden>
                                            <span id="usernameHeader"></span></a>
                                        <a onClick={this.onSubmitAdvertiseClick} className="button border">ثبت آگهی
                                            رایگان</a>
                                    </div>
                                </div> :
                                <div className="right-side">
                                </div>
                            }
                        </div>
                    </div>
                    <div id="header" className='cloned unsticky'>
                        <div className="container">
                            <div className="left-side">
                                <div id="logo">
                                    <a onClick={this.onHomePageClick}><img src={require("./image/logol.png")}
                                                                           alt=""/></a>
                                </div>
                                <div className="mmenu-trigger">
                                    <button id='hamburgerBtn' className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
                                    </button>
                                </div>
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">

                                        <li><a id='home' name='home' onClick={this.onHomePageClick}>خانه</a>

                                        </li>

                                        <li><a id='advertise' name='advertise' onClick={this.onAdvertisingPageClick}>آگهی
                                            ها</a>

                                        </li>

                                        <li><a id='realStatePanel' name='realStatePanel'
                                               onClick={this.onRealstatePanelClick}>پنل املاک</a>

                                        </li>
                                        <li><a id='bestAgencies' name='bestAgencies' onClick={this.onBestAgenciesClick}>آژانس
                                            برتر </a>

                                        </li>

                                        <li><a id='contact' name='contact' onClick={this.onContactClick}> تماس با ما</a>

                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                            {!this.isLoginPage() ?
                                <div className="right-side">
                                    <div className="header-widget">
                                        {(this.props.user && this.props.user.username) ?
                                            <a id="loginContainer" className="sign-in-username" onClick={this.onProfileClick}>
                                                {this.props.user.username} خوش آمدید</a> :
                                            <a id="loginContainer" onClick={this.onLoginClick} className="sign-in">
                                                <i className="fa fa-user"></i>
                                                {this.props.location.pathname === "/realstatePanel" ? 'ورود به پنل املاک' : 'ورود / ثبت نام'}
                                            </a>}
                                        <a id="userContainer" href="my-profile.html" className="sign-in" hidden>
                                            <span id="usernameHeader"></span></a>
                                        <a onClick={this.onSubmitAdvertiseClick} className="button border">ثبت آگهی
                                            رایگان</a>
                                    </div>
                                </div> :
                                <div className="right-side">
                                </div>
                            }
                        </div>
                    </div>
                </header>

                <Routes/>

                <div className="sticky-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <img className="footer-logo" src={require("./image/logol.png")} alt=""/>
                                <br/><br/>
                                <div className="row">

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="name" name="name"
                                               placeholder="نام و نام خانوادگی"
                                               type="text" id="nameFooter" required/>

                                    </div>

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="email" name="email" placeholder="ایمیل"
                                               type="email"
                                               id="emailFooter" required/>

                                    </div>

                                </div>
                                <textarea className="form-control" id="comments" name="comments" placeholder="نظر....."
                                          rows="5"
                                          id="commentsFooter"/>
                                <br/>

                                <div className="row">

                                    <div className="col-sm-12 form-group">

                                        <button className="btn btn-default pull-right" type="submit">ثبت</button>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <h4>پیوندهای مفید</h4>
                                <ul className="footer-links">
                                    <li><a  name='realStatePanel'
                                           onClick={this.onLogin}>ورود</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onRegisterClick}>ثبت نام</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onMyProfile}>حساب کاربری من</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onSubmit}>ثبت ملک</a></li>

                                </ul>

                                <ul className="footer-links">

                                    <li><a href="contact.html">تماس</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                            <div className="col-md-3  col-sm-12">
                                <h4>تماس با ما</h4>
                                <div className="text-widget">
                                    <span>رشت ، گلسار</span> <br/>
                                    تلفن: <span>۰۹۱۲۳۴۵۶۷۸۹ </span><br/>
                                    ایمیل:<span> <a href="#">najafi@example.com</a> </span><br/>
                                </div>


                            </div>

                        </div>


                    </div>

                </div>
                <div id="backtotop"><a href="#"></a></div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(RealState));


{/*
<div className="d-flex align-items-center">
    <a referrerPolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=184185&amp;Code=hOMhSUQs1Y4sKnO6xS2M">
        <img
            referrerPolicy="origin"
            src="https://Trustseal.eNamad.ir/logo.aspx?id=184185&amp;Code=hOMhSUQs1Y4sKnO6xS2M"
            alt="" style={{cursor:'pointer'}} id="hOMhSUQs1Y4sKnO6xS2M"/>
    </a>
    <img
        id="nbqeesgtfukzoeukjzpejxlz" style={{cursor:'pointer'}}
        onClick="window.open(&quot;https://logo.samandehi.ir/Verify.aspx?id=206871&amp;p=uiwkobpdgvkamcsijyoerfth&quot;, &quot;Popup&quot;,&quot;toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30&quot;)"
        alt=""
        src="https://logo.samandehi.ir/logo.aspx?id=206871&amp;p=odrflymawlbqaqgwyndtnbpd"/>
</div>*/}
