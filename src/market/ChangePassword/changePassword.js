import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class changePassword extends React.Component {

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

    render() {
        return (
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
                                        <li><a href="my-profile.html"><i className="sl sl-icon-user"></i> پروفایل من</a>
                                        </li>
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
                                        <li><a href="change-password.html" className="current"><i
                                            className="sl sl-icon-lock"></i> تغییر رمز عبور</a></li>
                                        <li><a href="#"><i className="sl sl-icon-power"></i> خروج</a></li>
                                    </ul>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6  my-profile">
                                    <h4 className="margin-top-0 margin-bottom-30">تغییر رمز عبور</h4>

                                    <label>رمز عبور فعلی</label>
                                    <input style="text-align:left;" type="password"/>

                                        <label>رمز عبور جدید</label>
                                        <input style="text-align:left;" type="password"/>

                                            <label>تایید رمز عبور جدید</label>
                                            <input style="text-align:left;" type="password"/>

                                                <a href="submit-property.html" className="margin-top-20 button">ذخیره ی
                                                    تغییرات</a>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                <div className="margin-top-55"></div>


                <div id="backtotop"><a href="#"></a></div>


                <script type="text/javascript" src="scripts/jquery-3.4.1.min.js"></script>
                <script type="text/javascript" src="scripts/jquery-migrate-3.1.0.min.js"></script>
                <script type="text/javascript" src="scripts/chosen.min.js"></script>
                <script type="text/javascript" src="scripts/magnific-popup.min.js"></script>
                <script type="text/javascript" src="scripts/owl.carousel.min.js"></script>
                <script type="text/javascript" src="scripts/rangeSlider.js"></script>
                <script type="text/javascript" src="scripts/sticky-kit.min.js"></script>
                <script type="text/javascript" src="scripts/slick.min.js"></script>
                <script type="text/javascript" src="scripts/masonry.min.js"></script>
                <script type="text/javascript" src="scripts/mmenu.min.js"></script>
                <script type="text/javascript" src="scripts/tooltips.min.js"></script>
                <script type="text/javascript" src="scripts/custom.js"></script>


            </div>
        );
    }
}

export default withTranslation()(changePassword);
