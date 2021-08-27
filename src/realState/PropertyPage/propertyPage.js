import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class propertyPage extends React.Component {

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

                <div id="titlebar" className="property-titlebar margin-bottom-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <a href="listings-list-with-sidebar.html" className="back-to-listings"></a>
                                <div className="property-title">
                                    <h2>آپارتمان <span className="property-badge">فروشی</span></h2>
                                    <span>
						<a href="#location" className="listing-address">
							<i className="fa fa-map-marker"></i>
						</a>
					</span>
                                </div>

                                <div className="property-pricing">
                                    <div>420,000 تومان</div>
                                    <div className="sub-price">770 تومان / متر مربع</div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row margin-bottom-50">
                        <div className="col-md-12">

                            <div className="property-slider default">
                                <a href="images/single-property-01.jpg" data-background-image="images/listing-01.jpg"
                                   className="item mfp-gallery"></a>
                                <a href="images/single-property-02.jpg" data-background-image="images/listing-02.jpg"
                                   className="item mfp-gallery"></a>
                                <a href="images/single-property-03.jpg" data-background-image="images/listing-03.jpg"
                                   className="item mfp-gallery"></a>
                                <a href="images/single-property-04.jpg" data-background-image="images/listing-04.jpg"
                                   className="item mfp-gallery"></a>
                                <a href="images/single-property-05.jpg" data-background-image="images/listing-04.jpg"
                                   className="item mfp-gallery"></a>
                                <a href="images/single-property-06.jpg" data-background-image="images/listing-05.jpg"
                                   className="item mfp-gallery"></a>
                            </div>

                            <div className="property-slider-nav">
                                <div className="item"><img src="images/listing-01.jpg" alt=""/></div>
                                <div className="item"><img src="images/listing-02.jpg" alt=""/></div>
                                <div className="item"><img src="images/listing-03.jpg" alt=""/></div>
                                <div className="item"><img src="images/listing-04.jpg" alt=""/></div>
                                <div className="item"><img src="images/listing-05.jpg" alt=""/></div>
                                <div className="item"><img src="images/listing-06.jpg" alt=""/></div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-7 sp-content">
                            <div className="property-description">

                                <ul className="property-main-features">
                                    <li>مساحت <span>1450 متر مربع</span></li>
                                    <li>تعداد اتاق ها <span>4</span></li>
                                    <li>اتاق خواب <span>2</span></li>
                                    <li>حمام <span>1</span></li>
                                </ul>


                                <h3 className="desc-headline">جزئیات</h3>
                                <ul className="property-features margin-top-0">
                                    <li>عمر ساخت: <span></span></li>
                                    <li>پارکینگ: <span></span></li>
                                    <li>سیستم سرما: <span></span></li>
                                    <li>سیستم گرما: <span></span></li>
                                    <li>فاضلاب: <span></span></li>
                                    <li>آب: <span></span></li>
                                    <li>اتاق ورزش: <span></span></li>
                                    <li>انباری: <span></span></li>
                                </ul>


                                <h3 className="desc-headline">ویژگی ها</h3>
                                <ul className="property-features checkboxes margin-top-0">
                                    <li>تهویه مطبوع</li>
                                    <li>استخر شنا</li>
                                    <li>گرمایش مرکزی</li>
                                    <li>اتاق لباسشویی</li>
                                    <li>باشگاه بدنسازی</li>
                                    <li>زنگ خطر</li>
                                    <li>پوشش پنجره</li>
                                    <li>اینترنت</li>
                                </ul>

                                <h3 className="desc-headline">توضیحات</h3>
                                <div className="show-more">
                                    <p>

                                    </p>

                                    <p>
                                    </p>

                                    <p>
                                    </p>

                                    <a href="#" className="show-more-button">بیشتر <i className="fa fa-angle-down"></i></a>
                                </div>

                                <h3 className="desc-headline no-border margin-bottom-35 margin-top-60">موارد مشابه</h3>


                                <div className="layout-switcher hidden"><a href="#" className="list"><i
                                    className="fa fa-th-list"></i></a></div>
                                <div className="listings-container list-layout">

                                    <div className="listing-item">

                                        <a href="#" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">1700 تومان <i>ماهیانه</i></span>
                                                <span className="like-icon"></span>
                                            </div>

                                            <img src="images/listing-03.jpg" alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="#">خانه ویلایی</a></h4>
                                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                </a>

                                                <a href="#" className="details button border">جزئیات</a>
                                            </div>

                                            <ul className="listing-details">
                                                <li>1450 متر مربع</li>
                                                <li>1 اتاق خواب</li>
                                                <li>2 اتاق</li>
                                                <li>2 اتاق</li>
                                            </ul>

                                            <div className="listing-footer">
                                                <a href="#"><i className="fa fa-user"></i> </a>
                                                <span><i className="fa fa-calendar-o"></i> </span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="listing-item">

                                        <a href="#" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">420,000 تومان <i>770 تومان / متر مربع</i></span>
                                                <span className="like-icon"></span>
                                            </div>

                                            <div><img src="images/listing-04.jpg" alt=""/></div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="#">آپارتمان</a></h4>
                                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                </a>

                                                <a href="#" className="details button border">جزئیات</a>
                                            </div>

                                            <ul className="listing-details">
                                                <li>540 متر مربع</li>
                                                <li>1 اتاق خواب</li>
                                                <li>3 اتاق</li>
                                                <li>2 حمام</li>
                                            </ul>

                                            <div className="listing-footer">
                                                <a href="#"><i className="fa fa-user"></i> </a>
                                                <span><i className="fa fa-calendar-o"></i> </span>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="listing-item">

                                        <a href="#" className="listing-img-container">
                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">535,000 تومان <i>640 تومان / متر مربع</i></span>
                                                <span className="like-icon"></span>
                                            </div>

                                            <img src="images/listing-05.jpg" alt=""/>
                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="#">یک طبقه</a></h4>
                                                <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                </a>

                                                <a href="#" className="details button border">جزئیات</a>
                                            </div>

                                            <ul className="listing-details">
                                                <li>350 متر مربع</li>
                                                <li>1 اتاق خواب</li>
                                                <li>2 اتاق</li>
                                                <li>1 حمام</li>
                                            </ul>

                                            <div className="listing-footer">
                                                <a href="#"><i className="fa fa-user"></i> </a>
                                                <span><i className="fa fa-calendar-o"></i> </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-5 sp-sidebar">
                            <div className="sidebar sticky right">

                                <div className="widget margin-bottom-30">

                                    <button className="widget-button with-tip" data-tip-content="افزودن به بوک مارک"><i
                                        className="fa fa-star-o"></i></button>

                                    <div className="clearfix"></div>
                                </div>


                                <div className="widget">
                                    <h3 className="margin-bottom-35">املاک ویژه</h3>

                                    <div className="listing-carousel outer">
                                        <div className="item">
                                            <div className="listing-item compact">

                                                <a href="#" className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>فروشی</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        <span
                                                            className="listing-compact-title"> <i>275,000 تومان</i></span>

                                                        <ul className="listing-hidden-content">
                                                            <li>مساحت <span>530 متر مربع</span></li>
                                                            <li>تعداد اتاق ها <span>3</span></li>
                                                            <li>اتاق خواب <span>1</span></li>
                                                            <li>حمام <span>1</span></li>
                                                        </ul>
                                                    </div>

                                                    <img src="images/listing-01.jpg" alt=""/>
                                                </a>

                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="listing-item compact">

                                                <a href="#" className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>فروشی</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        <span className="listing-compact-title">آپارتمان <i>245,000 تومان</i></span>

                                                        <ul className="listing-hidden-content">
                                                            <li>مساحت <span>530 متر مربع</span></li>
                                                            <li>تعداد اتاق ها <span>3</span></li>
                                                            <li>اتاق خواب <span>1</span></li>
                                                            <li>حمام <span>1</span></li>
                                                        </ul>
                                                    </div>

                                                    <img src="images/listing-02.jpg" alt=""/>
                                                </a>

                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="listing-item compact">

                                                <a href="#" className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>فروشی</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        <span
                                                            className="listing-compact-title">یک طبقه <i>325,000 تومان</i></span>

                                                        <ul className="listing-hidden-content">
                                                            <li>مساحت <span>530 متر مربع</span></li>
                                                            <li>تعداد اتاق ها <span>3</span></li>
                                                            <li>اتاق خواب <span>1</span></li>
                                                            <li>حمام <span>1</span></li>
                                                        </ul>
                                                    </div>

                                                    <img src="images/listing-03.jpg" alt=""/>
                                                </a>

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
                <script type="text/javascript" src="scripts/mmenu.min.js"></script>
                <script type="text/javascript" src="scripts/tooltips.min.js"></script>
                <script type="text/javascript" src="scripts/masonry.min.js"></script>
                <script type="text/javascript" src="scripts/custom.js"></script>



                <script src="scripts/moment.min.js"></script>
                <script src="scripts/daterangepicker.js"></script>




            </div>
        );
    }
}

export default withTranslation()(propertyPage);
