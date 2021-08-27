import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ScriptTag from 'react-script-tag';

class LoginRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1
        }
    }


    onNavMenuClick(activeNavMenu) {
        this.setState({
            activeNav: activeNavMenu
        })
    }

    componentDidMount() {
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {

            var element = document.createElement("script");
            element.src = "../scripts/jquery-migrate-3.1.0.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/magnific-popup.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/sticky-kit.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/masonry.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/tooltips.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/Utils/generalUI.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    render() {
        return (
            <div id='root-div'>

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
                                                       name="login" placeholder="ورود"/>

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
                                                           id="username2" />
                                                </label>
                                            </p>

                                            <p className="form-row form-row-wide">
                                                <label htmlFor="email2">ایمیل:
                                                    <i className="im im-icon-Mail"></i>
                                                    <input type="text" className="input-text" name="email" id="email2"/>
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
                                                       placeholder="ثبت نام"/>
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

export default withTranslation()(LoginRegister);
