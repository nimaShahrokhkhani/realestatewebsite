import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import connect from "react-redux/es/connect/connect";
import {setState, setUser} from "../../components/redux/actions";
import Services from "../../utils/Services";

class profile extends React.Component {

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

    onSubmitChangesClick = () => {
        let name = document.getElementById('name').value;
        let telephone = document.getElementById('telephone').value;
        let email = document.getElementById('email').value;
        let aboutMe = document.getElementById('aboutMe').value;
            Services.editClientProfile({
                username: this.props.user.username,
                name: name,
                telephone: telephone,
                aboutMe: aboutMe,
                email: email
            }).then((res) => {
                this.props.setUser({
                    username: this.props.user.username,
                    name: name,
                    telephone: telephone,
                    aboutMe: aboutMe,
                    email: email
                });
            }).catch((error) => {

            })
    };

    render() {
        return (
            <div id='root-div' style={{marginTop: 0}}>
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
                                            <li><a href="my-profile.html" className="current"><i
                                                className="sl sl-icon-user"></i> پروفایل من</a></li>
                                            <li><a href="my-bookmarks.html"><i className="sl sl-icon-star"></i> آگهی های
                                                مورد علاقه</a></li>
                                        </ul>

                                        <ul className="my-account-nav">
                                            <li className="sub-nav-title">مدیریت آگهی ها</li>
                                            <li><a href="my-properties.html"><i className="sl sl-icon-docs"></i> املاک
                                                من</a></li>
                                            <li><a href="submit-property.html"><i
                                                className="sl sl-icon-action-redo"></i> ثبت ملک جدید</a></li>
                                        </ul>

                                        <ul className="my-account-nav">
                                            <li><a href="change-password.html"><i className="sl sl-icon-lock"></i> تغییر
                                                رمز
                                                عبور</a></li>
                                            <li><a href="#"><i className="sl sl-icon-power"></i> خروج</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="row">


                                    <div className="col-md-8 my-profile">
                                        <label>نام</label>
                                        <input value={this.props.user.name} type="text" id='name'/>

                                        <label>شماره تماس</label>
                                        <input value={this.props.user.telephone} style={{direction: "ltr"}} type="text" id='telephone'/>

                                        <label>ایمیل</label>
                                        <input value={this.props.user.email} style={{direction: "ltr"}} type="text" id='email'/>


                                        <h4 className="margin-top-50 margin-bottom-25">درباره من</h4>
                                        <textarea value={this.props.user.aboutMe} name="about" id="aboutMe" cols="30" rows="10"/>


                                        <button className="button margin-top-20 margin-bottom-20" onClick={this.onSubmitChangesClick}>ذخیره ی
                                            تغییرات
                                        </button>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="edit-profile-photo">
                                            <img src="#" alt=""/>
                                            <div className="change-photo-btn">
                                                <div className="photoUpload">
                                                    <span><i className="fa fa-upload"></i> بارگذاری تصویر</span>
                                                    <input type="file" className="upload"/>
                                                </div>
                                            </div>
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

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(profile));
