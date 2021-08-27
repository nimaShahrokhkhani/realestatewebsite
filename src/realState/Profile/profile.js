import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class profile extends React.Component {

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
                                        <li><a href="change-password.html"><i className="sl sl-icon-lock"></i> تغییر رمز
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
                                    <input value="" type="text"/>

                                        <label>عنوان</label>
                                        <input value="" type="text"/>

                                            <label>شماره تماس</label>
                                            <input style="direction:ltr" value="" type="text"/>

                                                <label>ایمیل</label>
                                                <input style="direction:ltr" value="" type="text"/>


                                                    <h4 className="margin-top-50 margin-bottom-25">درباره من</h4>
                                                    <textarea name="about" id="about" cols="30" rows="10"> </textarea>


                                                    <button className="button margin-top-20 margin-bottom-20">ذخیره ی
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

export default withTranslation()(profile);
