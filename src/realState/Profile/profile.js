import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import connect from "react-redux/es/connect/connect";
import {setState, setUser} from "../../components/redux/actions";
import Services from "../../utils/Services";
import Doka, {imageList} from "./dropZone";
import {NotificationContainer, NotificationManager} from "react-notifications";
import ScaleLoader from "react-spinners/ScaleLoader";

class profile extends React.Component {

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

    hideLoading() {
        this.setState({
            isLoading: false
        })
    }

    onSubmitChangesClick = () => {
        let name = document.getElementById('name').value;
        let telephone = document.getElementById('telephone').value;
        let email = document.getElementById('email').value;
        let aboutMe = document.getElementById('aboutMe').value;
        this.setState({
            isLoading: true
        }, () => {
            const data = new FormData();
            data.append('file', imageList[0]);
            data.append('username', this.props.user.username);
            data.append('name', name);
            data.append('telephone', telephone);
            data.append('email', email);
            data.append('aboutMe', aboutMe);
            Services.editClientProfile(data).then((response) => {
                this.hideLoading();
                this.props.setUser({
                    username: this.props.user.username,
                    name: name,
                    telephone: telephone,
                    aboutMe: aboutMe,
                    email: email
                });
                NotificationManager.success('موفق', 'تغییرات آژانس با موفقیت ثبت شد');
            }).catch((error) => {
                this.hideLoading();
                NotificationManager.error('خطا', 'خطا در تغییرات آژانس', 5000);
            });
        })
    };

    changePasswordScreen = () => {
        this.props.history.push({
            pathname: '/changePassword'
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
            this.props.setUser({});
            this.props.history.push({
                pathname: '/'
            });
        }).catch(() => {
            sessionStorage.clear();
            localStorage.clear();
            this.props.setUser({});
            this.props.history.push({
                pathname: '/'
            });
        })

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

                                    <h2>پروفایل من</h2>


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
                                            <li><a className="current"><i
                                                className="sl sl-icon-user"></i> پروفایل من</a></li>
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
                                            <li><a onClick={this.changePasswordScreen}><i className="sl sl-icon-lock"></i> تغییر
                                                رمز
                                                عبور</a></li>
                                            <li><a onClick={this.logoutUser}><i className="sl sl-icon-power"></i> خروج</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8">
                                <div style={{display: 'flex', flexDirection: 'column'}}>

                                    <div className="col-md-4" style={{display: 'flex', width: '100%'}}>
                                        <div className="edit-profile-photo">
                                            <Doka/>
                                        </div>
                                        {this.props.user.image && <img style={{width: 200, height: 160}} src={Services.getUserProfileImageDownloadUrl(this.props.user.image)} alt=""/>}

                                    </div>

                                    <div className="col-md-8 my-profile">
                                        <label>نام</label>
                                        <input value={this.props.user.name} type="text" id='name'/>

                                        <label>شماره تماس</label>
                                        <input value={this.props.user.telephone} style={{direction: "ltr"}} type="text" id='telephone'/>

                                        <label>ایمیل</label>
                                        <input value={this.props.user.email} style={{direction: "ltr"}} type="text" id='email'/>


                                        <h4 className="margin-top-50 margin-bottom-25">درباره من</h4>
                                        <textarea value={this.props.user.aboutMe} name="about" id="aboutMe" cols="30" rows="10"/>


                                        {this.state.isLoading ?
                                            <ScaleLoader loading={true} color={"#274abb"} size={150}/> :
                                            <button className="button margin-top-20 margin-bottom-20" onClick={this.onSubmitChangesClick}>ذخیره ی
                                                تغییرات
                                            </button>
                                        }

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

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(profile));
