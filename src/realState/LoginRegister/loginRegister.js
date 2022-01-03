import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ScriptTag from 'react-script-tag';
import Services from "../../utils/Services";
import connect from "react-redux/es/connect/connect";
import {setState, setUser} from "../../components/redux/actions";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class LoginRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1
        }
    }

    componentDidMount() {
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {
            $('html').removeClass('mm-blocking mm-opened mm-background mm-opening');

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    onLoginBtnClick = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        Services.signInClient({username: username, password: password}).then((res) => {
            this.props.setUser(res.data);
            this.props.history.push({
                pathname: '/profile'
            });
        }).catch((error) => {
            NotificationManager.error('خطا', 'نام کاربری یا کلمه عبور اشتباه است', 5000);
        })
    };

    onRegisterBtnClick = () => {
        let username = document.getElementById('username1').value;
        let password = document.getElementById('password1').value;
        let repeatPassword = document.getElementById('password2').value;
        let email = document.getElementById('email').value;
        if (password === repeatPassword) {
            Services.registerClient({username: username, password: password, email: email}).then((res) => {
                this.props.setUser({username: username, email: email});
                this.props.history.push({
                    pathname: '/profile'
                });
            }).catch((error) => {
                NotificationManager.error('خطا', 'خطا در ثبت نام', 5000);
            })
        }
    };

    render() {
        return (
            <div id='root-div'>

                <NotificationContainer/>

                <div className="clearfix"></div>

                <div className="container">

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">


                            <div className="my-account style-1 margin-top-5 margin-bottom-40">

                                <ul className="tabs-nav">
                                    <li className=""><a href="#tab1">ورود</a></li>
                                    <li><a href="#tab2">ثبت نام</a></li>
                                </ul>

                                <div className="tabs-container alt">

                                    <div className="tab-content" id="tab1" style={{display: 'none'}}>
                                        <div className="login">

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="username">نام کاربری:
                                                    <i className="im im-icon-Male"></i>
                                                    <input type="text" className="input-text" name="username"
                                                           id="username"/>
                                                </label>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="password">رمز عبور:
                                                    <i className="im im-icon-Lock-2"></i>
                                                    <input className="input-text" type="password" name="password"
                                                           id="password"/>
                                                </label>
                                            </p>

                                            <p className="form-row">
                                                <input type="submit" className="button border margin-top-10"
                                                       name="login" value="ورود" onClick={this.onLoginBtnClick}/>

                                                <label htmlFor="rememberme" className="rememberme">
                                                    <input name="rememberme" type="checkbox" id="rememberme"
                                                           value="forever"/> من را
                                                    به خاطر بسپار</label>
                                            </p>

                                            <p className="lost_password">
                                                <a href="#">رمز خود را فراموش کرده اید؟</a>
                                            </p>

                                        </div>
                                    </div>

                                    <div className="tab-content" id="tab2" style={{display: 'none'}}>

                                        <div className="register">

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="username2">نام کاربری:
                                                    <i className="im im-icon-Male"></i>
                                                    <input type="text" className="input-text" name="username"
                                                           id="username1"/>
                                                </label>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="email2">ایمیل:
                                                    <i className="im im-icon-Mail"></i>
                                                    <input type="text" className="input-text" name="email" id="email"/>
                                                </label>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="password1">رمز عبور:
                                                    <i className="im im-icon-Lock-2"></i>
                                                    <input className="input-text" type="password" name="password1"
                                                           id="password1"/>
                                                </label>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="password2">تکرار رمز عبور:
                                                    <i className="im im-icon-Lock-2"></i>
                                                    <input className="input-text" type="password" name="password2"
                                                           id="password2"/>
                                                </label>
                                            </p>

                                            <p className="form-row">
                                                <input type="submit" className="button border fw margin-top-10"
                                                       name="register"
                                                       value="ثبت نام"
                                                       onClick={this.onRegisterBtnClick}/>
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(LoginRegister));
