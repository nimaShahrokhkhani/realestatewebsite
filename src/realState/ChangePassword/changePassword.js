import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import {NotificationContainer, NotificationManager} from "react-notifications";
import ScaleLoader from "react-spinners/ScaleLoader";
import connect from "react-redux/es/connect/connect";
import {setState, setUser} from "../../components/redux/actions";

class changePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
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

    hideLoading() {
        this.setState({
            isLoading: false
        })
    }

    profileScreen = () => {
        this.props.history.push({
            pathname: '/profile'
        });
    };

    insertAdvertise = () => {
        this.props.history.push({
            pathname: '/submitAdvertise'
        });
    };

    logoutUser = () => {
        Services.logoutUser().then(() => {
            sessionStorage.clear();
            localStorage.clear();
            this.props.setUser(undefined);
            this.props.history.push({
                pathname: '/'
            });
        }).catch(() => {
            sessionStorage.clear();
            localStorage.clear();
            this.props.setUser(undefined);
            this.props.history.push({
                pathname: '/'
            });
        })

    };

    onChangePasswordClick = () => {
        let currentPassword = document.getElementById('currentPassword').value;
        let newPassword = document.getElementById('newPassword').value;
        let repeatNewPassword = document.getElementById('repeatNewPassword').value;
        if (repeatNewPassword === newPassword && newPassword.length >= 6) {
            Services.changeClientPassword({
                username: this.props.user.username,
                currentPassword: currentPassword,
                newPassword: newPassword
            }).then((response) => {
                this.hideLoading();
                NotificationManager.success('موفق', 'تغییر رمز کاربر با موفقیت ثبت شد');
            }).catch(() => {
                this.hideLoading();
                NotificationManager.error('خطا', 'خطا در تغییر رمز کاربر', 5000);
            })
        }
    };

    render() {
        return (
            <div id='root-div' style={{marginTop: 0}}>
                <NotificationContainer/>
                <div id="wrapper">


                    <div className="clearfix"></div>

                    <div id="titlebar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <h2>تغییر رمز عبور</h2>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">


                            <div className="col-md-4">
                                <div className="sidebar left">

                                    <div className="my-account-nav-container">

                                        <ul className="my-account-nav">
                                            <li className="sub-nav-title">مدیریت حساب کاربری</li>
                                            <li><a onClick={this.profileScreen}><i className="sl sl-icon-user"></i> پروفایل من</a>
                                            </li>
                                            <li><a><i className="sl sl-icon-star"></i> آگهی های
                                                مورد علاقه</a></li>
                                        </ul>

                                        <ul className="my-account-nav">
                                            <li className="sub-nav-title">مدیریت آگهی ها</li>
                                            <li><a><i className="sl sl-icon-docs"></i> املاک
                                                من</a></li>
                                            <li><a onClick={this.insertAdvertise}><i
                                                className="sl sl-icon-action-redo"></i> ثبت ملک جدید</a></li>
                                        </ul>

                                        <ul className="my-account-nav">
                                            <li><a className="current"><i
                                                className="sl sl-icon-lock"></i> تغییر رمز عبور</a></li>
                                            <li><a onClick={this.logoutUser}><i className="sl sl-icon-power"></i> خروج</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6  my-profile">
                                        <h4 className="margin-top-0 margin-bottom-30">تغییر رمز عبور</h4>

                                        <label>رمز عبور فعلی</label>
                                        <input style={{textAlign: 'left'}} type="password" id='currentPassword'/>

                                        <label>رمز عبور جدید</label>
                                        <input style={{textAlign: 'left'}} type="password" id='newPassword'/>

                                        <label>تایید رمز عبور جدید</label>
                                        <input style={{textAlign: 'left'}} type="password" id='repeatNewPassword'/>

                                        {this.state.isLoading ?
                                            <ScaleLoader loading={true} color={"#274abb"} size={150}/> :
                                            <a onClick={this.onChangePasswordClick} className="margin-top-20 button">ذخیره ی
                                                تغییرات</a>
                                        }

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="margin-top-55"></div>


                    <div id="backtotop"><a href="#"></a></div>


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(changePassword));
