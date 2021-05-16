import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class advertisingPage extends React.Component {

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


                <header id="header-container">


                    <div className="clearfix"></div>


                </header>
                <div className="clearfix"></div>


                <div className="container">
                    <div className="row sticky-wrapper">

                        <div className="col-md-8">

                            <div className="main-search-input margin-bottom-35">
                                <input type="text" className="ico-01" placeholder="آدرس را وارد کنید" value=""/>
                                <button className="button">جست و جو</button>
                            </div>

                            <div className="row margin-bottom-15">


                            </div>


                            <div className="row">

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-compact-title"><i>275,000 تومان</i></span>

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

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-compact-title"> <i>900 تومان / ماهیانه</i></span>

                                                <ul className="listing-hidden-content">
                                                    <li>مساحت <span>440 متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>3</span></li>
                                                    <li>اتاق خواب <span>1</span></li>
                                                    <li>حمام <span>1</span></li>
                                                </ul>
                                            </div>

                                            <img src="images/listing-02.jpg" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-compact-title"> <i>1700 تومان / ماهیانه</i></span>

                                                <ul className="listing-hidden-content">
                                                    <li>مساحت <span>1450 متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>3</span></li>
                                                    <li>اتاق خواب <span>2</span></li>
                                                    <li>حمام <span>2</span></li>
                                                </ul>
                                            </div>

                                            <img src="images/listing-03.jpg" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-compact-title"> <i>420,000 تومان</i></span>

                                                <ul className="listing-hidden-content">
                                                    <li>مساحت <span>540 متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>2</span></li>
                                                    <li>اتاق خواب <span>2</span></li>
                                                    <li>حمام <span>1</span></li>
                                                </ul>
                                            </div>

                                            <img src="images/listing-04.jpg" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-compact-title"> <i>535,000 تومان</i></span>

                                                <ul className="listing-hidden-content">
                                                    <li>مساحت <span>550 متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>3</span></li>
                                                    <li>اتاق خواب <span>2</span></li>
                                                    <li>حمام <span>2</span></li>
                                                </ul>
                                            </div>

                                            <img src="images/listing-05.jpg" alt=""/>
                                        </a>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="listing-item compact">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-compact-title"> <i>500 تومان / ماهیانه</i></span>

                                                <ul className="listing-hidden-content">
                                                    <li>مساحت <span>850 متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>3</span></li>
                                                    <li>اتاق خواب <span>2</span></li>
                                                    <li>حمام <span>1</span></li>
                                                </ul>
                                            </div>

                                            <img src="images/listing-06.jpg" alt=""/>
                                        </a>

                                    </div>
                                </div>

                            </div>


                            <div className="clearfix"></div>
                            <div className="pagination-container margin-top-20">
                                <nav className="pagination">
                                    <ul>
                                        <li><a href="#" className="current-page">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="blank">...</li>
                                        <li><a href="#">22</a></li>
                                    </ul>
                                </nav>

                                <nav className="pagination-next-prev">
                                    <ul>
                                        <li><a href="#" className="prev">قبلی</a></li>
                                        <li><a href="#" className="next">بعدی</a></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>


                        <div className="col-md-4">
                            <div className="sidebar sticky right">

                                <div className="widget margin-bottom-40">
                                    <h3 className="margin-top-0 margin-bottom-35">یافتن خانه جدید</h3>

                                    <div className="row with-forms">
                                        <div className="col-md-12">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single">
                                                <option>وضعیت</option>
                                                <option>فروش</option>
                                                <option>اجاره</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-12">
                                            <select data-placeholder="نوع" className="chosen-select-no-single">
                                                <option>نوع</option>
                                                <option>آپارتمان</option>
                                                <option>خانه</option>
                                                <option>تجاری</option>
                                                <option>گاراژ</option>
                                                <option>ویلا</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-12">

                                        </div>
                                    </div>


                                    <div className="row with-forms">
                                        <div className="col-md-12">
                                            <select data-placeholder="شهرستان" className="chosen-select">
                                                <option>رشت</option>
                                                <option>لاهیجان</option>
                                                <option>فومن</option>
                                                <option>ماسال</option>
                                                <option>صومعه سرا</option>
                                                <option>زیبا کنار</option>
                                                <option>بندر انزلی</option>
                                                <option>رضوان شهر</option>
                                                <option>گیسوم</option>

                                            </select>
                                        </div>
                                    </div>


                                    <div className="row with-forms">

                                        <div className="col-md-6">
                                            <select data-placeholder="اتاق خواب" className="chosen-select-no-single">
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
                                            <select data-placeholder="حمام" className="chosen-select-no-single">
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

                                    <br>

                                        <div className="range-slider">
                                            <label>مساحت</label>
                                            <div id="area-range" data-min="0" data-max="1500" data-unit="مترمربع"></div>
                                            <div className="clearfix"></div>
                                        </div>

                                        </br>

                                            <div className="range-slider">
                                                <label>قیمت</label>
                                                <div id="price-range" data-min="0" data-max="400000"
                                                     data-unit="تومان"></div>
                                                <div className="clearfix"></div>
                                            </div>


                                            <a href="#"
                                               className="more-search-options-trigger margin-bottom-10 margin-top-30"
                                               data-open-title="گزینه های بیشتر" data-close-title="بستن"></a>

                                            <div className="more-search-options relative">

                                                <div className="checkboxes one-in-row margin-bottom-10">

                                                    <input id="check-2" type="checkbox" name="check"/>
                                                        <label htmlFor="check-2">تهویه مطبوع</label>

                                                        <input id="check-3" type="checkbox" name="check"/>
                                                            <label htmlFor="check-3">استخر</label>

                                                            <input id="check-4" type="checkbox" name="check"/>
                                                                <label htmlFor="check-4">گرمایش مرکزی</label>

                                                                <input id="check-5" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-5">اتاق لباسشویی</label>


                                                                    <input id="check-6" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-6">باشگاه بدنسازی</label>

                                                                        <input id="check-7" type="checkbox"
                                                                               name="check"/>
                                                                            <label htmlFor="check-7">زنگ خطر</label>

                                                                            <input id="check-8" type="checkbox"
                                                                                   name="check"/>
                                                                                <label htmlFor="check-8">پوشش
                                                                                    پنجره</label>

                                                </div>

                                            </div>

                                            <button className="button fullwidth margin-top-30">جستجو</button>


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
                <script type="text/javascript" src="scripts/mmenu.min.js"></script>
                <script type="text/javascript" src="scripts/tooltips.min.js"></script>
                <script type="text/javascript" src="scripts/masonry.min.js"></script>
                <script type="text/javascript" src="scripts/custom.js"></script>


            </div>

        );
    }
}

export default withTranslation()(advertisingPage);
