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

class LoginPanel extends React.Component {

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

    onLoginBtnClick = () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        Services.signInPanel({username: username, password: password}).then((res) => {
            this.props.setUser(res.data);
            this.props.history.push({
                pathname: '/realstate/realstatePanel'
            });
        }).catch((error) => {
            NotificationManager.error('خطا', 'نام کاربری یا کلمه عبور اشتباه است', 5000);
        })
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

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(LoginPanel));
