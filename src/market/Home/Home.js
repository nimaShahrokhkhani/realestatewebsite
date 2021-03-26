import React from 'react';
import './Home.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

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


            <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">


            <nav className="navbar navbar-default navbar-fixed-top top">


                <div className="container">

                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">

                            <span className="icon-bar"></span>

                            <span className="icon-bar"></span>

                            <span className="icon-bar"></span>

                        </button>

                        <a className="navbar-brand" href="#myPage">
                            <button className="submit-adv">ثبت آگهی</button>

                        </a>

                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">

                        <ul className="nav navbar-nav navbar-right">

                            <li className={(this.state.activeNav === 1) && 'active'}><a href="#about" onClick={() => this.onNavMenuClick(1)}>آژانس املاک</a></li>

                            <li className={(this.state.activeNav === 2) && 'active'}><a href="#pricing" onClick={() => this.onNavMenuClick(2)}>خرید اشتراک</a></li>

                            <li className={(this.state.activeNav === 3) && 'active'}><a href="#contact" onClick={() => this.onNavMenuClick(3)}>تماس با ما</a></li>

                        </ul>

                    </div>

                </div>

            </nav>


            <div className="jumbotron text-center ">


                <div className="search-container">
                    <div className="search-inner-container">
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary btn-type">خرید</button>
                            <button type="button" className="btn btn-primary btn-type">رهن</button>
                            <button type="button" className="btn btn-primary btn-type">اجاره</button>
                        </div>

                        <div className="input-group search">

                            <input type="text" className="form-control" placeholder="جستجو" required/>

                            <div className="input-group-btn">

                                <button type="button" className="btn btn-search">جستجو</button>
                            </div>

                        </div>


                    </div>

                </div>

            </div>


            <div id="about" className="container-fluid">

                <div className="row about">

                    <div className="col-sm-8">

                        <h2>آژانس املاک</h2><br/>

                        <h4></h4><br/>

                        <p></p>

                        <br/>
                        <button className="btn btn-default btn-lg">اطلاعات بیشتر</button>

                    </div>

                    <div className="col-sm-4 shape">

                        <span className="glyphicon glyphicon-signal logo" style={{margin: 'auto'}}></span>

                    </div>

                </div>

            </div>


            <div className="container-fluid bg-grey ">

                <div className="row">

                    <div className="col-sm-4 shap1">

                        <span className="glyphicon glyphicon-globe logo slideanim shape2"
                              style={{marginTop: 100}}></span>

                    </div>

                    <div className="col-sm-8 about1">

                        <h2>در باره گیلان فایل</h2><br/>

                        <h4><strong></strong></h4><br/>

                        <p><strong></strong>

                        </p>

                    </div>

                </div>

            </div>


            <div id="pricing" className="container-fluid">

                <div className="text-center">

                    <h2>خرید اشتراک</h2>

                    <h4>انتخاب یک اشتراک مناسب که برای شما مناسب باشد</h4>

                </div>

                <div className="row slideanim">

                    <div className="col-sm-4 col-xs-12">

                        <div className="panel panel-default text-center">

                            <div className="panel-heading">

                                <h1>Basic</h1>

                            </div>

                            <div className="panel-body">

                                <p><strong>20</strong> Lorem</p>

                                <p><strong>15</strong> Ipsum</p>

                                <p><strong>5</strong> Dolor</p>

                                <p><strong>2</strong> Sit</p>

                                <p><strong>Endless</strong> Amet</p>

                            </div>

                            <div className="panel-footer">

                                <h3>$19</h3>

                                <h4>per month</h4>

                                <button className="btn btn-lg">خرید</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-sm-4 col-xs-12">

                        <div className="panel panel-default text-center">

                            <div className="panel-heading">

                                <h1>Pro</h1>

                            </div>

                            <div className="panel-body">

                                <p><strong>50</strong> Lorem</p>

                                <p><strong>25</strong> Ipsum</p>

                                <p><strong>10</strong> Dolor</p>

                                <p><strong>5</strong> Sit</p>

                                <p><strong>Endless</strong> Amet</p>

                            </div>

                            <div className="panel-footer">

                                <h3>$29</h3>

                                <h4>per month</h4>

                                <button className="btn btn-lg">خرید</button>

                            </div>

                        </div>

                    </div>

                    <div className="col-sm-4 col-xs-12">

                        <div className="panel panel-default text-center">

                            <div className="panel-heading">

                                <h1>Premium</h1>

                            </div>

                            <div className="panel-body">

                                <p><strong>100</strong> Lorem</p>

                                <p><strong>50</strong> Ipsum</p>

                                <p><strong>25</strong> Dolor</p>

                                <p><strong>10</strong> Sit</p>

                                <p><strong>Endless</strong> Amet</p>

                            </div>

                            <div className="panel-footer">

                                <h3>$49</h3>

                                <h4>per month</h4>

                                <button className="btn btn-lg">خرید</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div id="contact" className="container-fluid bg-grey contact1">

                <h2 className="text-center"> ارتباط با ما</h2>

                <div className="row">

                    <div className="col-sm-5">

                        <p>تماس با ما و پاسخگویی ۲۴ ساعت</p>

                        <p><span className="glyphicon glyphicon-map-marker"></span> Rasht, IRAN</p>

                        <p><span className="glyphicon glyphicon-phone"></span> +98 1515151515</p>

                        <p><span className="glyphicon glyphicon-envelope"></span> Najafi@Gmail.com</p>

                    </div>

                    <div className="col-sm-7 slideanim">

                        <div className="row">

                            <div className="col-sm-6 form-group">

                                <input className="form-control" id="name" name="name" placeholder="نام و نام خانوادگی"
                                       type="text" required/>

                            </div>

                            <div className="col-sm-6 form-group">

                                <input className="form-control" id="email" name="email" placeholder="ایمیل" type="email"
                                       required/>

                            </div>

                        </div>

                        <textarea className="form-control" id="comments" name="comments" placeholder="نظر....."
                                  rows="5"></textarea><br/>

                        <div className="row">

                            <div className="col-sm-12 form-group">

                                <button className="btn btn-default pull-right" type="submit">ثبت</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <footer className="container-fluid text-center">

                <a href="#myPage" title="To Top">

                    <span className="glyphicon glyphicon-chevron-up"></span>

                </a>

                <p>طراحی شده توسط شرکت هوشمند ساتر فن آوران <a href="https://www.Satter.ir"
                                                               title="Visit w3schools">www.Satter.ir</a></p>

            </footer>


            </div>

        );
    }
}

export default withTranslation()(Home);
