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

                                        <li><a className="current" href="#">????????</a>

                                        </li>

                                        <li><a href="listings-grid-compact-with-sidebar.html">???????? ????</a>

                                        </li>

                                        <li><a href="listings-house.html">??????????</a>

                                        </li>
                                        <li><a href="#">?????????? ???? </a>

                                        </li>

                                        <li>

                                            <li><a href="contact.html"> ???????? ???? ????</a>

                                            </li>
                                        </li>

                                    </ul>
                                </nav>
                                <div className="clearfix"></div>

                            </div>

                            <div className="right-side">
                                <div className="header-widget">
                                    <a href="login-register.html" className="sign-in"><i
                                        className="fa fa-user"></i> ???????? / ?????? ??????</a>
                                    <a href="submit-property.html" className="button border">?????? ???????? ????????????</a>
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
                                        <h2>?????????? ???????? ?????????????? ?????????? ??????</h2>

                                        <form className="main-search-form">

                                            <div className="search-type">
                                                <label className="active"><input className="first-tab" name="tab"
                                                                                 href="#tab1" checked="checked"
                                                                                 type="radio"/>??????</label>
                                                <label><input name="tab" href="#tab2" type="radio"/>??????????</label>
                                                <label><input name="tab" href="#tab3" type="radio"/>?????????? ????</label>
                                            </div>


                                            <div className="main-search-box">

                                                <div className="main-search-input larger-input">
                                                    <input type="text" className="ico-01"
                                                           placeholder="???????? ???? ???????? ????????." value=""/>
                                                    <button className="button">?????? ?? ????</button>
                                                </div>

                                                <div className="row with-forms">

                                                    <div className="col-md-4">
                                                        <select data-placeholder="Any Type"
                                                                className="chosen-select-no-single">
                                                            <option>??????</option>
                                                            <option>??????????????????</option>
                                                            <option>????????</option>
                                                            <option>??????????</option>
                                                            <option>??????????</option>
                                                        </select>
                                                    </div>


                                                    <div className="col-md-4">

                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="?????????? ????????"
                                                                   data-unit="??????????"/>
                                                            <select>
                                                                <option>??????</option>
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
                                                            <input type="text" placeholder="???????????? ????????"
                                                                   data-unit="??????????"/>
                                                            <select>
                                                                <option>??????</option>
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
                                                   data-open-title="?????????? ?????? ??????????"
                                                   data-close-title="????????"></a>

                                                <div className="more-search-options">
                                                    <div className="more-search-options-container">

                                                        <div className="row with-forms">

                                                            <div className="col-md-6">

                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="?????????? ??????????"
                                                                           data-unit="?????? ????????"/>
                                                                    <select>
                                                                        <option>?????????? ??????????</option>
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
                                                                    <input type="text" placeholder="???????????? ??????????"
                                                                           data-unit="?????? ????????"/>
                                                                    <select>
                                                                        <option>???????????? ??????????</option>
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
                                                                <select data-placeholder="?????????? ???????? ????"
                                                                        className="chosen-select-no-single">
                                                                    <option label="blank"></option>
                                                                    <option>??????</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <select data-placeholder="????????"
                                                                        className="chosen-select-no-single">
                                                                    <option label="blank"></option>
                                                                    <option>??????</option>
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
                                                            <label htmlFor="check-2">?????????? ??????????</label>

                                                            <input id="check-3" type="checkbox" name="check"/>
                                                            <label htmlFor="check-3">??????????</label>

                                                            <input id="check-4" type="checkbox" name="check"/>
                                                            <label htmlFor="check-4">???????????? ??????????</label>

                                                            <input id="check-5" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-5">????????
                                                                ????????????????</label>


                                                            <input id="check-6" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-6">????????????
                                                                ??????????????</label>

                                                            <input id="check-7" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-7">??????
                                                                ??????</label>

                                                            <input id="check-8" type="checkbox"
                                                                   name="check"/>
                                                            <label htmlFor="check-8">????????
                                                                ??????????</label>

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
                            <h3 className="headline margin-bottom-25 margin-top-65">???????? ????</h3>
                        </div>

                        <div className="col-md-12">
                            <div className="carousel">

                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">????????</span>
                                                <span>??????????</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">275,000 ?????????? <i>520 ?????????? / ?????? ????????</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="???????????? ???? ?????? ????????"></span>

                                            </div>

                                            <div className="listing-carousel">
                                                <div><img src={require("../image/listing-01.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01b.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01c.jpg")} alt=""/></div>
                                            </div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">?????????? ?????????????????? ????????</a></h4>
                                                <a href="https://www.google.com/maps/place/Razavi+Khorasan+Province,+Mashhad,+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%A7%D9%85%D8%A7%D9%85+%D8%B1%D8%B6%D8%A7%E2%80%AD/@36.2028549,59.6614743,17z/data=!3m1!4b1!4m5!3m4!1s0x3f6ca2acf5cf5a51:0xc8a193899b4f158!8m2!3d36.2028549!4d59.6592856"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ?????????? ???????????? ???????? ?????? (??)
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>?????????? <span>530 ?????? ????????</span></li>
                                                <li>???????? <span>2</span></li>
                                                <li>???????? <span>1</span></li>
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
                                                <span>?????????? ????</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">900 ?????????? <i>??????????????</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="???????????? ???? ?????? ????????"></span>

                                            </div>

                                            <img src={require("../image/listing-02.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-2.html">???? ????????</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D9%81%D8%A7%D8%B1%D8%B3%D8%8C+%D8%B4%DB%8C%D8%B1%D8%A7%D8%B2%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%B2%D9%86%D8%AF%E2%80%AD/@29.6113874,52.5557874,17z/data=!3m1!4b1!4m5!3m4!1s0x3fb20d1302fae4d1:0xd3f1c9e2d34704d0!8m2!3d29.6113874!4d52.5535987"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ???????? ???????????? ??????
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>?????????? <span>440 ?????? ????????</span></li>
                                                <li>???????? <span>2</span></li>
                                                <li>???????? <span>1</span></li>
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
                                                <span className="featured">????????</span>
                                                <span>?????????? ????</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">1700 ?????????? <i>??????????????</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="???????????? ???? ?????? ????????"></span>

                                            </div>

                                            <img src={require("../image/listing-03.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">????????????</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%AA%D9%88%D8%AD%DB%8C%D8%AF%E2%80%AD/@32.6320114,51.6606961,17z/data=!3m1!4b1!4m5!3m4!1s0x3fbc366bc2495d7d:0xaa480c47907b9253!8m2!3d32.6320114!4d51.6585074"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ???????? ???????????? ??????????
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>?????????? <span>1450 ?????? ????????</span></li>
                                                <li>???????? <span>2</span></li>
                                                <li>???????? <span>3</span></li>
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
                                                <span>??????????</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">420,000 ?????????? <i>770 ?????????? / ?????? ????????</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="???????????? ???? ?????? ????????"></span>
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
                                                <h4><a href="single-property-page-3.html">????????????????</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%A7%D8%B1%D9%85%E2%80%AD/@35.760998,51.4079418,17z/data=!4m13!1m7!3m6!1s0x3f8e06f20c08bb85:0xeca2b3603db04425!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINiu24zYp9io2KfZhiDYp9ix2YU!3b1!8m2!3d35.760998!4d51.4057531!3m4!1s0x3f8e06f20c08bb85:0xeca2b3603db04425!8m2!3d35.760998!4d51.4057531"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ???????????? ???????????? ??????
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>?????????? <span>540 ?????? ????????</span></li>
                                                <li>???????? <span>2</span></li>
                                                <li>???????? <span>2</span></li>
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
                                                <span>??????????</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">535,000 ?????????? <i>640 ?????????? / ?????? ????????</i></span>
                                                <span className="like-icon with-tip"
                                                      data-tip-content="???????????? ???? ?????? ????????"></span>
                                                <span className="compare-button with-tip"
                                                      data-tip-content=""></span>
                                            </div>

                                            <img src={require("../image/listing-05.jpg")} alt=""/>
                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">???????? ????????????</a></h4>
                                                <a href="https://www.google.com/maps/place/%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D9%88%D9%86%DA%A9%E2%80%AD/@35.7574324,51.4116358,17z/data=!4m5!3m4!1s0x3f8e06edbddcaa0b:0x4bbf706b90a13862!8m2!3d35.7599458!4d51.4061216"
                                                   className="listing-address popup-gmaps">
                                                    <i className="fa fa-map-marker"></i>
                                                    ???????????? ???????? ??????????
                                                </a>
                                            </div>

                                            <ul className="listing-features">
                                                <li>?????????? <span>350 ?????? ????????</span></li>
                                                <li>???????? <span>2</span></li>
                                                <li>???????? <span>1</span></li>
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

                    <h3 className="headline-box">?????????? ?????? ?????????? ?????????? ????????</h3>


                </section>

                <section className="fullwidth margin-top-105" data-background-color="white">

                    <h3 className="headline-box">?????????? ????????????</h3>


                </section>


                <section className="fullwidth margin-top-95 margin-bottom-0">

                    <h3 className="headline-box">???????????? ?? ???????? ????</h3>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/real-estate1.jpeg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">?????????? ?????????? 1</a></h3>


                                        <a href="blog-post.html" className="read-more">?????????? <i
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
                                        <h3><a href="#">?????????? ?????????? 2</a></h3>


                                        <a href="blog-post.html" className="read-more">?????????? <i
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
                                        <h3><a href="#">?????????? ?????????? 3</a></h3>


                                        <a href="blog-post.html" className="read-more">?????????? <i
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
                                               placeholder="?????? ?? ?????? ????????????????" type="text" required/>

                                    </div>

                                    <div className="col-sm-6 form-group">

                                        <input className="form-control" id="email" name="email"
                                               placeholder="??????????" type="email" required/>

                                    </div>

                                </div>
                                <textarea className="form-control" id="comments" name="comments"
                                          placeholder="??????....." rows="5"></textarea>
                                <br/>

                                <div className="row">

                                    <div className="col-sm-12 form-group">

                                        <button className="btn btn-default pull-right" type="submit">??????
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <h4>???????????????? ????????</h4>
                                <ul className="footer-links">
                                    <li><a href="#">????????</a></li>
                                    <li><a href="#">?????? ??????</a></li>
                                    <li><a href="#">???????? ???????????? ????</a></li>
                                    <li><a href="#">?????? ??????</a></li>

                                </ul>

                                <ul className="footer-links">
                                    <li><a href="#">???????? ?????? ????????????</a></li>

                                    <li><a href="#">????????</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                            <div className="col-md-3  col-sm-12">
                                <h4>???????? ???? ????</h4>
                                <div className="text-widget">
                                    <span>?????? ?? ??????????</span> <br/>
                                    ????????: <span>01332130930 </span><br/>
                                    ??????????:<span> <a href="#">gilanfile1400@gmail.com</a> </span><br/>
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
