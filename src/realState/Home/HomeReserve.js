import React from 'react';
import './Home.css';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ScriptTag from 'react-script-tag';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1
        }
    }

    componentDidMount() {
        $(document).ready(function () {

// Add smooth scrolling to all links in navbar + footer link

            $(".navbar a, footer a[href='#myPage']").on('click', function (event) {


// Prevent default anchor click behavior

                event.preventDefault();


// Store hash

                var hash = this.hash;


// Using jQuery's animate() method to add smooth page scroll

// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area

                $('html, body').animate({

                    scrollTop: $(hash).offset().top

                }, 900, function () {


// Add hash (#) to URL when done scrolling (default click behavior)

                    window.location.hash = hash;

                });

            });


// Slide in elements on scroll

            $(window).scroll(function () {

                $(".slideanim").each(function () {

                    var pos = $(this).offset().top;


                    var winTop = $(window).scrollTop();

                    if (pos < winTop + 600) {

                        $(this).addClass("slide");

                    }

                });

            });

        })
    }

    onNavMenuClick(activeNavMenu) {
        this.setState({
            activeNav: activeNavMenu
        })
    }

    render() {
        return (


            <div id="wrapper">

                <header id="header-container">


                    <div className="clearfix"></div>
                    <div id="header">
                        <div className="container">

                            <div className="left-side">

                                <div id="logo">
                                    <a href="index.html"><img src={require("../image/logol.png")} alt=""/></a>
                                </div>


                                <div className="mmenu-trigger">
                                    <button className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
                                    </button>
                                </div>


                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">

                                        <li><a className="current" href="#">خانه</a>

                                        </li>

                                        <li><a href="listings-grid-compact-with-sidebar.html">آگهی ها</a>

                                        </li>

                                        <li><a href="listings-house.html">املاک</a>

                                        </li>
                                        <li><a href="#">آژانس ها </a>

                                        </li>

                                        <li>

                                            <li><a href="contact.html"> تماس با ما</a>

                                            </li>
                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>

                            </div>

                            <div className="right-side">
                                <div className="header-widget">
                                    <a href="login-register.html" className="sign-in"><i
                                        className="fa fa-user"></i> ورود / ثبت نام</a>
                                    <a href="submit-property.html" className="button border">ثبت آگهی رایگان</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </header>
                <div className="clearfix"></div>


                <div className="parallax" data-color="##rgb(54 56 62 / 46%)"
                     data-color-opacity="0.45"
                     data-img-width="2500" data-img-height="1600">
                    <div className="parallax-content">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="main-search-container">
                                        <h2>اولین بانک اطلاعات املاک رشت</h2>

                                        <form className="main-search-form">

                                            <div className="search-type">
                                                <label className="active"><input className="first-tab" name="tab"
                                                                                 href="#tab1" checked="checked"
                                                                                 type="radio"/>همه</label>
                                                <label><input name="tab" href="#tab2" type="radio"/>فروشی</label>
                                                <label><input name="tab" href="#tab3" type="radio"/>اجاره ای</label>
                                            </div>


                                            <div className="main-search-box">

                                                <div className="main-search-input larger-input">
                                                    <input type="text" className="ico-01"
                                                           placeholder="آدرس را وارد کنید." value=""/>
                                                    <button className="button">جست و جو</button>
                                                </div>

                                                <div className="row with-forms">

                                                    <div className="col-md-4">
                                                        <select data-placeholder="Any Type"
                                                                className="chosen-select-no-single">
                                                            <option>همه</option>
                                                            <option>آپارتمانی</option>
                                                            <option>خانه</option>
                                                            <option>تجاری</option>
                                                            <option>گاراژ</option>
                                                        </select>
                                                    </div>


                                                    <div className="col-md-4">

                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداقل قیمت"
                                                                   data-unit="تومان"/>
                                                            <select>
                                                                <option>همه</option>
                                                                <option>1000</option>
                                                                <option>2000</option>
                                                                <option>3000</option>
                                                                <option>4000</option>
                                                                <option>5000</option>
                                                                <option>10000</option>
                                                                <option>15000</option>
                                                                <option>20000</option>
                                                                <option>30000</option>
                                                                <option>40000</option>
                                                                <option>50000</option>
                                                                <option>60000</option>
                                                                <option>70000</option>
                                                                <option>80000</option>
                                                                <option>90000</option>
                                                                <option>100000</option>
                                                                <option>110000</option>
                                                                <option>120000</option>
                                                                <option>130000</option>
                                                                <option>140000</option>
                                                                <option>150000</option>
                                                            </select>
                                                        </div>

                                                    </div>


                                                    <div className="col-md-4">

                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداکثر قیمت"
                                                                   data-unit="تومان"/>
                                                            <select>
                                                                <option>همه</option>
                                                                <option>1000</option>
                                                                <option>2000</option>
                                                                <option>3000</option>
                                                                <option>4000</option>
                                                                <option>5000</option>
                                                                <option>10000</option>
                                                                <option>15000</option>
                                                                <option>20000</option>
                                                                <option>30000</option>
                                                                <option>40000</option>
                                                                <option>50000</option>
                                                                <option>60000</option>
                                                                <option>70000</option>
                                                                <option>80000</option>
                                                                <option>90000</option>
                                                                <option>100000</option>
                                                                <option>110000</option>
                                                                <option>120000</option>
                                                                <option>130000</option>
                                                                <option>140000</option>
                                                                <option>150
                                                                    000
                                                                </option>
                                                            </select>
                                                        </div>

                                                    </div>

                                                </div>


                                                <a href="#" className="more-search-options-trigger"
                                                   data-open-title="گزینه های بیشتر"
                                                   data-close-title="بستن"></a>

                                                <div className="more-search-options">
                                                    <div className="more-search-options-container">

                                                        <div className="row with-forms">

                                                            <div className="col-md-6">

                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="حداقل مساحت"
                                                                           data-unit="متر مربع"/>
                                                                    <select>
                                                                        <option>حداقل مساحت</option>
                                                                        <option>300</option>
                                                                        <option>400</option>
                                                                        <option>500</option>
                                                                        <option>700</option>
                                                                        <option>800</option>
                                                                        <option>1000</option>
                                                                        <option>1500</option>
                                                                    </select>
                                                                </div>

                                                            </div>

                                                            <div className="col-md-6">

                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="حداکثر مساحت"
                                                                           data-unit="متر مربع"/>
                                                                    <select>
                                                                        <option>حداکثر مساحت</option>
                                                                        <option>300</option>
                                                                        <option>400</option>
                                                                        <option>500</option>
                                                                        <option>700</option>
                                                                        <option>800</option>
                                                                        <option>1000</option>
                                                                        <option>1500</option>
                                                                    </select>
                                                                </div>

                                                            </div>

                                                        </div>


                                                        <div className="row with-forms">

                                                            <div className="col-md-6">
                                                                <select data-placeholder="تعداد اتاق ها"
                                                                        className="chosen-select-no-single">
                                                                    <option label="blank"></option>
                                                                    <option>همه</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <select data-placeholder="حمام"
                                                                        className="chosen-select-no-single">
                                                                    <option label="blank"></option>
                                                                    <option>همه</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="checkboxes in-row">

                                                            <input id="check-2" type="checkbox" name="check"/>
                                                            <label htmlFor="check-2">تهویه مطبوع</label>

                                                            <input id="check-3" type="checkbox" name="check"/>
                                                            <label htmlFor="check-3">استخر</label>

                                                            <input id="check-4" type="checkbox" name="check"/>
                                                            <label htmlFor="check-4">گرمایش مرکزی</label>

                                                            <input id="check-5" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-5">اتاق
                                                                لباسشویی</label>


                                                            <input id="check-6" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-6">باشگاه
                                                                بدنسازی</label>

                                                            <input id="check-7" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-7">زنگ
                                                                خطر</label>

                                                            <input id="check-8" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-8">پوشش
                                                                پنجره</label>

                                                        </div>

                                                    </div>
                                                </div>


                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline margin-bottom-25 margin-top-65">تازه ها</h3>
                        </div>

                        <div className="col-md-12">
                            <div className="carousel">

                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">275,000 تومان <i>520 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="افزودن به بوک مارک"></span>

                                            </div>

                                            <div className="listing-carousel">
                                                <div><img src={require("../image/listing-01.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01b.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01c.jpg")} alt=""/></div>
                                            </div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">مجتمع آپارتمانی عقاب</a></h4>
                                                <a href="https://www.google.com/maps/place/Razavi+Khorasan+Province,+Mashhad,+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%A7%D9%85%D8%A7%D9%85+%D8%B1%D8%B6%D8%A7%E2%80%AD/@36.2028549,59.6614743,17z/data=!3m1!4b1!4m5!3m4!1s0x3f6ca2acf5cf5a51:0xc8a193899b4f158!8m2!3d36.2028549!4d59.6592856"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ٰرشت، خیابان امام رضا (ع)
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>مساحت <span>530 متر مربع</span></li>
                                                <li>اتاق <span>2</span></li>
                                                <li>حمام <span>1</span></li>
                                            </ul>

                                            <div className="listing-footer">
                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-2.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">900 تومان <i>ماهیانه</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="افزودن به بوک مارک"></span>

                                            </div>

                                            <img src={require("../image/listing-02.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-2.html">یک طبقه</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D9%81%D8%A7%D8%B1%D8%B3%D8%8C+%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%B2%D9%86%D8%AF%E2%80%AD/@29.6113874,52.5557874,17z/data=!3m1!4b1!4m5!3m4!1s0x3fb20d1302fae4d1:0xd3f1c9e2d34704d0!8m2!3d29.6113874!4d52.5535987"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    رشت، خیابان زند
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>مساحت <span>440 متر مربع</span></li>
                                                <li>اتاق <span>2</span></li>
                                                <li>حمام <span>1</span></li>
                                            </ul>

                                            <div className="listing-footer">
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">1700 تومان <i>ماهیانه</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="افزودن به بوک مارک"></span>

                                            </div>

                                            <img src={require("../image/listing-03.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">ویلایی</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%AA%D9%88%D8%AD%DB%8C%D8%AF%E2%80%AD/@32.6320114,51.6606961,17z/data=!3m1!4b1!4m5!3m4!1s0x3fbc366bc2495d7d:0xaa480c47907b9253!8m2!3d32.6320114!4d51.6585074"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    رشت، خیابان توحید
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>مساحت <span>1450 متر مربع</span></li>
                                                <li>اتاق <span>2</span></li>
                                                <li>حمام <span>3</span></li>
                                            </ul>

                                            <div className="listing-footer">
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">


                                        <a href="single-property-page-3.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">420,000 تومان <i>770 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="افزودن به بوک مارک"></span>
                                                <span className="compare-button with-tip"
                                                      data-tip-content=""></span>
                                            </div>

                                            <div className="listing-carousel">
                                                <div><img src={require("../image/listing-04.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-04b.jpg")} alt=""/></div>
                                            </div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-3.html">آپارتمان</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%A7%D8%B1%D9%85%E2%80%AD/@35.760998,51.4079418,17z/data=!4m13!1m7!3m6!1s0x3f8e06f20c08bb85:0xeca2b3603db04425!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINiu24zYp9io2KfZhiDYp9ix2YU!3b1!8m2!3d35.760998!4d51.4057531!3m4!1s0x3f8e06f20c08bb85:0xeca2b3603db04425!8m2!3d35.760998!4d51.4057531"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    تهران، خیابان ارم
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>مساحت <span>540 متر مربع</span></li>
                                                <li>اتاق <span>2</span></li>
                                                <li>حمام <span>2</span></li>
                                            </ul>

                                            <div className="listing-footer">

                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className="listing-item">


                                        <a href="single-property-page-1.html" className="listing-img-container">
                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">535,000 تومان <i>640 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="افزودن به بوک مارک"></span>
                                                <span className="compare-button with-tip"
                                                      data-tip-content=""></span>
                                            </div>

                                            <img src={require("../image/listing-05.jpg")} alt=""/>
                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">خانه ویلایی</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D9%88%D9%86%DA%A9%E2%80%AD/@35.7574324,51.4116358,17z/data=!4m5!3m4!1s0x3f8e06edbddcaa0b:0x4bbf706b90a13862!8m2!3d35.7599458!4d51.4061216"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    خیابان ونک، تهران
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>مساحت <span>350 متر مربع</span></li>
                                                <li>اتاق <span>2</span></li>
                                                <li>حمام <span>1</span></li>
                                            </ul>

                                            <div className="listing-footer">
                                                <a href="#"><i className="fa fa-user"></i></a>
                                                <span><i className="fa fa-calendar-o"></i> </span>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                <section className="fullwidth margin-top-105" data-background-color="#f7f7f7">

                    <h3 className="headline-box">معرفی نرم افزار گیلان فایل</h3>


                </section>

                <section className="fullwidth margin-top-105" data-background-color="white">

                    <h3 className="headline-box">املاک مسکونی</h3>


                </section>


                <section className="fullwidth margin-top-95 margin-bottom-0">

                    <h3 className="headline-box">مقالات و نکته ها</h3>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/real-estate1.jpeg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 1</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/real-estate1.jpeg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 2</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/REAL-ESTATE.jpg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 3</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                <div id="footer" className="sticky-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <img className="footer-logo" src="../image/logol.png" alt=""/>
                                <br/><br/>
                                <div className="row">

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="name" name="name"
                                               placeholder="نام و نام خانوادگی" type="text" required/>

                                    </div>

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="email" name="email"
                                               placeholder="ایمیل" type="email" required/>

                                    </div>

                                </div>
                                <textarea className="form-control" id="comments" name="comments"
                                          placeholder="نظر....." rows="5"></textarea>
                                <br/>

                                <div className="row">

                                    <div className="col-sm-12 form-group">

                                        <button className="btn btn-default pull-right" type="submit">ثبت
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <h4>پیوندهای مفید</h4>
                                <ul className="footer-links">
                                    <li><a href="#">ورود</a></li>
                                    <li><a href="#">ثبت نام</a></li>
                                    <li><a href="#">حساب کاربری من</a></li>
                                    <li><a href="#">ثبت ملک</a></li>

                                </ul>

                                <ul className="footer-links">
                                    <li><a href="#">پرسش های متداول</a></li>

                                    <li><a href="#">تماس</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                            <div className="col-md-3  col-sm-12">
                                <h4>تماس با ما</h4>
                                <div className="text-widget">
                                    <span>رشت ، گلسار</span> <br/>
                                    تلفن: <span>01332130930 </span><br/>
                                    ایمیل:<span> <a href="#">gilanfile1400@gmail.com</a> </span><br/>
                                </div>


                            </div>

                        </div>


                    </div>

                </div>


                <div id="backtotop"><a href="#"></a></div>

                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/jquery-3.4.1.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/jquery-migrate-3.1.0.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/chosen.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/chosen.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/magnific-popup.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/owl.carousel.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/rangeSlider.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/sticky-kit.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/slick.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/masonry.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/mmenu.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/tooltips.min.js" />
                <ScriptTag isHydrating={false} type="text/javascript" src="scripts/custom.js" />


            </div>

        );
    }
}

export default withTranslation()(Home);
