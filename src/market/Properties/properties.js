import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class properties extends React.Component {

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
                                        <li><a href="my-properties.html" className="current"><i
                                            className="sl sl-icon-docs"></i> املاک من</a></li>
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
                            <table className="manage-table responsive-table">

                                <tr>
                                    <th><i className="fa fa-file-text"></i> ملک</th>
                                    <th className="expire-date"><i className="fa fa-calendar"></i> تاریخ انقضا</th>
                                    <th></th>
                                </tr>

                                <tr>
                                    <td className="title-container">
                                        <img src="images/listing-02.jpg" alt=""/>
                                            <div className="title">
                                                <h4><a href="#">آپارتمان</a></h4>
                                                <span> </span>
                                                <span className="table-property-price">900 تومان / ماهیانه</span>
                                            </div>
                                    </td>
                                    <td className="expire-date">23 اردیبهشت 1400</td>
                                    <td className="action">
                                        <a href="#"><i className="fa fa-pencil"></i> ویرایش</a>
                                        <a href="#"><i className="fa  fa-eye-slash"></i> پنهان کردن</a>
                                        <a href="#" className="delete"><i className="fa fa-remove"></i> پاک کردن</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="title-container">
                                        <img src="images/listing-05.jpg" alt=""/>
                                            <div className="title">
                                                <h4><a href="#">یک طبقه</a></h4>
                                                <span></span>
                                                <span className="table-property-price">535,000 تومان</span>
                                            </div>
                                    </td>
                                    <td className="expire-date">12 بهمن1400</td>
                                    <td className="action">
                                        <a href="#"><i className="fa fa-pencil"></i> ویرایش</a>
                                        <a href="#"><i className="fa  fa-eye-slash"></i> پنهان کردن</a>
                                        <a href="#" className="delete"><i className="fa fa-remove"></i> پاک کردن</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="title-container">
                                        <img src="images/listing-04.jpg" alt=""/>
                                            <div className="title">
                                                <h4><a href="#">آپارتمان</a></h4>
                                                <span> </span>
                                                <span className="table-property-price">420,000 تومان</span>
                                            </div>
                                    </td>
                                    <td className="expire-date">4 بهمن 1400</td>
                                    <td className="action">
                                        <a href="#"><i className="fa fa-pencil"></i> ویرایش</a>
                                        <a href="#"><i className="fa  fa-eye-slash"></i> پنهان کردن</a>
                                        <a href="#" className="delete"><i className="fa fa-remove"></i> پاک کردن</a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="title-container">
                                        <img src="images/listing-06.jpg" alt=""/>
                                            <div className="title">
                                                <h4><a href="#">مجتمع آپارتمانی</a></h4>
                                                <span>  </span>
                                                <span className="table-property-price">420,000 تومان</span>
                                            </div>
                                    </td>
                                    <td className="expire-date">27 دی 1400</td>
                                    <td className="action">
                                        <a href="#"><i className="fa fa-pencil"></i> ویرایش</a>
                                        <a href="#"><i className="fa  fa-eye-slash"></i> پنهان کردن</a>
                                        <a href="#" className="delete"><i className="fa fa-remove"></i> پاک کردن</a>
                                    </td>
                                </tr>

                            </table>
                            <a href="submit-property.html" className="margin-top-40 button">ثبت ملک جدید</a>
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

export default withTranslation()(properties);
