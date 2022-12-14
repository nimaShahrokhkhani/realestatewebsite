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
import { slide as Menu } from 'react-burger-menu'

const ExpandingSearchBox = makeExpanding(SearchBox);

class RealState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }

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

    closeHMenu() {
        let element = document.getElementsByClassName("bm-overlay")[0];
        element.click();
    }

    onHomePageClick = () => {
        this.closeHMenu();
        this.props.history.push({
            pathname: '/'
        });
        this.changeCurrentMenu('/');
    };

    onAdvertisingPageClick = () => {
        this.closeHMenu();
        this.props.history.push({
            pathname: '/advertise'
        });
        this.changeCurrentMenu('/advertise');
    };

    onRealstatePanelClick = () => {
        this.closeHMenu();
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
        this.closeHMenu();
        this.props.history.push({
            pathname: '/contact'
        });
        this.changeCurrentMenu('/contact');
    };

    onBestAgenciesClick = () => {
        this.closeHMenu();
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
            item.innerText = '???????? / ?????? ??????';
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
                    item.innerText = '???????? ???? ?????? ??????????';
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
        setTimeout(this.clickMenuEventListener, 5000)
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
                                {/*<div className="mmenu-trigger">
                                    <button id='hamburgerBtn' className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
                                    </button>
                                </div>*/}
                                <div className="mmenu-trigger">
                                    <Menu styles={styles} right isOpen={ false }>
                                        <a id="hmHome" className="menu-item" onClick={this.onHomePageClick}>????????</a>
                                        <a id="hmAdvertise" className="menu-item" onClick={this.onAdvertisingPageClick}>???????? ????</a>
                                        <a id="hmRealStatePanel" className="menu-item" onClick={this.onRealstatePanelClick}>?????? ??????????</a>
                                        <a id='hmBestAgencies' className="menu-item" onClick={this.onBestAgenciesClick}>?????????? ????????</a>
                                        <a id='hmContact' className="menu-item" onClick={this.onContactClick}>???????? ???? ????</a>
                                    </Menu>
                                </div>
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">

                                        <li><a id='home' name='home' className="current"
                                               onClick={this.onHomePageClick}>????????</a>

                                        </li>

                                        <li><a id='advertise' name='advertise' onClick={this.onAdvertisingPageClick}>????????
                                            ????</a>

                                        </li>

                                        <li><a id='realStatePanel' name='realStatePanel'
                                               onClick={this.onRealstatePanelClick}>?????? ??????????</a>

                                        </li>
                                        <li><a id='bestAgencies' name='bestAgencies' onClick={this.onBestAgenciesClick}>??????????
                                            ???????? </a>

                                        </li>

                                        <li><a id='contact' name='contact' onClick={this.onContactClick}> ???????? ???? ????</a>

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
                                                {this.props.user.username} ?????? ??????????</a> :
                                            <a id="loginContainer" onClick={this.onLoginClick} className="sign-in">
                                                {this.props.location.pathname === "/realstatePanel" ? '???????? ???? ?????? ??????????' : '???????? / ?????? ??????'}
                                            </a>}
                                        <a id="userContainer" href="my-profile.html" className="sign-in" hidden>
                                            <span id="usernameHeader"></span></a>
                                        <a onClick={this.onSubmitAdvertiseClick} className="button border">?????? ????????
                                            ????????????</a>
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

                                        <li><a id='home' name='home' onClick={this.onHomePageClick}>????????</a>

                                        </li>

                                        <li><a id='advertise' name='advertise' onClick={this.onAdvertisingPageClick}>????????
                                            ????</a>

                                        </li>

                                        <li><a id='realStatePanel' name='realStatePanel'
                                               onClick={this.onRealstatePanelClick}>?????? ??????????</a>

                                        </li>
                                        <li><a id='bestAgencies' name='bestAgencies' onClick={this.onBestAgenciesClick}>??????????
                                            ???????? </a>

                                        </li>

                                        <li><a id='contact' name='contact' onClick={this.onContactClick}> ???????? ???? ????</a>

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
                                                {this.props.user.username} ?????? ??????????</a> :
                                            <a id="loginContainer" onClick={this.onLoginClick} className="sign-in">
                                                <i className="fa fa-user"></i>
                                                {this.props.location.pathname === "/realstatePanel" ? '???????? ???? ?????? ??????????' : '???????? / ?????? ??????'}
                                            </a>}
                                        <a id="userContainer" href="my-profile.html" className="sign-in" hidden>
                                            <span id="usernameHeader"></span></a>
                                        <a onClick={this.onSubmitAdvertiseClick} className="button border">?????? ????????
                                            ????????????</a>
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
                                               placeholder="?????? ?? ?????? ????????????????"
                                               type="text" id="nameFooter" required/>

                                    </div>

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="email" name="email" placeholder="??????????"
                                               type="email"
                                               id="emailFooter" required/>

                                    </div>

                                </div>
                                <textarea className="form-control" id="comments" name="comments" placeholder="??????....."
                                          rows="5"
                                          id="commentsFooter"/>
                                <br/>

                                <div className="row">

                                    <div className="col-sm-12 form-group">

                                        <button className="btn btn-default pull-right" type="submit">??????</button>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <h4>???????????????? ????????</h4>
                                <ul className="footer-links">
                                    <li><a  name='realStatePanel'
                                           onClick={this.onLogin}>????????</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onRegisterClick}>?????? ??????</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onMyProfile}>???????? ???????????? ????</a></li>
                                    <li><a  name='realStatePanel'
                                           onClick={this.onSubmit}>?????? ??????</a></li>

                                </ul>

                                <ul className="footer-links">

                                    <li><a href="contact.html">????????</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                            <div className="col-md-3  col-sm-12">
                                <h4>???????? ???? ????</h4>
                                <div className="text-widget">
                                    <span>?????? ?? ??????????</span> <br/>
                                    ????????: <span>01332130930 </span><br/>
                                    ??????????:<span> <a href="#">gilanfile1400@gmail.com</a> </span><br/>
                                </div>


                            </div>
                            <div className="Enamad">
                                <a referrerPolicy="origin" target="_blank"
                                   href="https://trustseal.enamad.ir/?id=184185&amp;Code=hOMhSUQs1Y4sKnO6xS2M"><img
                                    referrerPolicy="origin"
                                    src="https://Trustseal.eNamad.ir/logo.aspx?id=184185&amp;Code=hOMhSUQs1Y4sKnO6xS2M"
                                    alt="" style={{cursor:'pointer'}} id="hOMhSUQs1Y4sKnO6xS2M"/></a>


                            </div>


                        </div>


                    </div>

                </div>
                <div id="backtotop"><a href="#"></a></div>


            </div>
        );
    }
}

var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '7px',
        top: '10px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#262626',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
        display: 'flex',
        flexDirection: 'column'
    },
    bmItem: {
        display: 'inline-block',
        color: 'white',
        marginBottom: 20
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(RealState));



