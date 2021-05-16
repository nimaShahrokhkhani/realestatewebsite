import React from 'react';
import '../css/style.css';
import '../css/color.css';
import '../realstatepanel/realstatePanel.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class realstatePanel extends React.Component {

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

                <section className="search margin-bottom-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h3 className="search-title">جست و جو</h3>

                                <div className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single">
                                                <option label="وضعیت"></option>
                                                <option>همه</option>
                                                <option>فروشی</option>
                                                <option>اجاره ای</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="نوع" className="chosen-select-no-single">
                                                <option label="نوع"></option>
                                                <option>همه</option>
                                                <option>آپارتمان</option>
                                                <option>خانه</option>
                                                <option>تجاری</option>
                                                <option>گاراژ</option>

                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="main-search-input">
                                                <select data-placeholder="آدرس را وارد کنید"
                                                        className="chosen-select-no-single">
                                                    <option label="آدرس را وارد کنید"></option>
                                                    <option>گلسار</option>
                                                    <option>شهرداری</option>
                                                    <option>بلوار گیلان</option>
                                                    <option>دیلمان</option>
                                                    <option>سردار جنگل</option>
                                                    <option>شریعتی</option>
                                                    <option>امام خمینی</option>
                                                    <option>امام حسین</option>
                                                    <option>انقلاب</option>
                                                    <option>خیابان طهماسبی</option>
                                                    <option>خیابان</option>
                                                    <option>معلم</option>


                                                </select>

                                                <button className="button">جست و جو</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="select-input disabled-first-option">
                                                <input type="text" placeholder="حداقل مساحت" data-unit="متر مربع"/>
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

                                        <div className="col-md-3">

                                            <div className="select-input disabled-first-option">
                                                <input type="text" placeholder="حداکثر مساحت" data-unit="متر مربع"/>
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


                                        <div className="col-md-3">

                                            <div className="select-input disabled-first-option">
                                                <input type="text" placeholder="حداقل قیمت" data-unit="تومان"/>
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


                                        <div className="col-md-3">

                                            <div className="select-input disabled-first-option">
                                                <input type="text" placeholder="حداکثر قیمت" data-unit="تومان"/>
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

                                    <a href="#" className="more-search-options-trigger margin-top-10"
                                       data-open-title="گزینه های بیشتر"
                                       data-close-title="بستن"></a>

                                    <div className="more-search-options relative">
                                        <div className="more-search-options-container">

                                            <div className="row with-forms">

                                                <div className="col-md-3">
                                                    <select data-placeholder="عمر خانه"
                                                            className="chosen-select-no-single">
                                                        <option label="عمر خانه"></option>
                                                        <option>همه</option>
                                                        <option>0 تا 1 سال</option>
                                                        <option>0 تا 5 سال</option>
                                                        <option>0 تا 10 سال</option>
                                                        <option>0 تا 20 سال</option>
                                                        <option>0 تا 50 سال</option>
                                                        <option>بالای 50 سال</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-3">
                                                    <select data-placeholder="اتاق" className="chosen-select-no-single">
                                                        <option label="اتاق"></option>
                                                        <option>همه</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-3">
                                                    <select data-placeholder="اتاق خواب"
                                                            className="chosen-select-no-single">
                                                        <option label="اتاق خواب"></option>
                                                        <option>همه</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-3">
                                                    <select data-placeholder="حمام" className="chosen-select-no-single">
                                                        <option label="حمام"></option>
                                                        <option>همه</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="نما" className="chosen-select-no-single">
                                                        <option label="نما"></option>
                                                        <option>رومی</option>
                                                        <option>سنگی</option>
                                                        <option>شیشه ای</option>
                                                        <option>سیمانی</option>
                                                        <option>شیروونی</option>
                                                        <option>گرانیت</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="تعداد واحد در هر طبقه"
                                                            className="chosen-select-no-single">
                                                        <option label="تعداد واحد در هر طبقه"></option>
                                                        <option>همه</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>6</option>
                                                        <option>+6</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="آشپزخانه"
                                                            className="chosen-select-no-single">
                                                        <option label="آشپزخانه"></option>
                                                        <option>mdf</option>
                                                        <option>فلزی</option>
                                                        <option>چوبی فلزی</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="کف" className="chosen-select-no-single">
                                                        <option label="کف"></option>
                                                        <option>سنگ</option>
                                                        <option>سرامیک</option>
                                                        <option>گرانیت</option>
                                                        <option>موزاییک</option>

                                                    </select>
                                                </div>

                                            </div>

                                            <div className="checkboxes in-row">

                                                <input id="check-2" type="checkbox" name="check"/>
                                                    <label htmlFor="check-2">تهویه مطبوع</label>

                                                    <input id="check-3" type="checkbox" name="check"/>
                                                        <label htmlFor="check-3">استخر شنا</label>

                                                        <input id="check-4" type="checkbox" name="check"/>
                                                            <label htmlFor="check-4">گرمایش مرکزی</label>

                                                            <input id="check-5" type="checkbox" name="check"/>
                                                                <label htmlFor="check-5">اتاق لباسشویی</label>


                                                                <input id="check-6" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-6">باشگاه بدنسازی</label>

                                                                    <input id="check-7" type="checkbox" name="check"/>
                                                                        <label htmlFor="check-7">زنگ خطر</label>

                                                                        <input id="check-8" type="checkbox"
                                                                               name="check"/>
                                                                            <label htmlFor="check-8">پوشش پنجره</label>

                                                                            <input id="check-8" type="checkbox"
                                                                                   name="check"/>
                                                                                <label htmlFor="check-8">گاز</label>

                                                                                <input id="check-8" type="checkbox"
                                                                                       name="check"/>
                                                                                    <label htmlFor="check-8">مالک عجله
                                                                                        دارد</label>
                                                                                    <br/>

                                                                                    <input id="check-8" type="checkbox"
                                                                                           name="check"/>
                                                                                        <label htmlFor="check-8">گرمایش
                                                                                            از کف</label>

                                                                                        <input id="check-8"
                                                                                               type="checkbox"
                                                                                               name="check"/>
                                                                                            <label
                                                                                                htmlFor="check-8">چیلر</label>

                                                                                            <input id="check-8"
                                                                                                   type="checkbox"
                                                                                                   name="check"/>
                                                                                                <label
                                                                                                    htmlFor="check-8">بالکن</label>

                                                                                                <input id="check-8"
                                                                                                       type="checkbox"
                                                                                                       name="check"/>
                                                                                                    <label
                                                                                                        htmlFor="check-8">فن
                                                                                                        کويل</label>

                                                                                                    <input id="check-8"
                                                                                                           type="checkbox"
                                                                                                           name="check"/>
                                                                                                        <label
                                                                                                            htmlFor="check-8">داکت
                                                                                                            اسپیلت</label>

                                                                                                        <input
                                                                                                            id="check-8"
                                                                                                            type="checkbox"
                                                                                                            name="check"/>
                                                                                                            <label
                                                                                                                htmlFor="check-8">درب
                                                                                                                ریموت
                                                                                                                کنترل </label>

                                                                                                            <input
                                                                                                                id="check-8"
                                                                                                                type="checkbox"
                                                                                                                name="check"/>
                                                                                                                <label
                                                                                                                    htmlFor="check-8">آنتن
                                                                                                                    مرکزی</label>

                                                                                                                <input
                                                                                                                    id="check-8"
                                                                                                                    type="checkbox"
                                                                                                                    name="check"/>
                                                                                                                    <label
                                                                                                                        htmlFor="check-8">شوفاژ</label>

                                                                                                                    <input
                                                                                                                        id="check-8"
                                                                                                                        type="checkbox"
                                                                                                                        name="check"/>
                                                                                                                        <label
                                                                                                                            htmlFor="check-8">انباری</label>

                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="margin-top-55"></div>


                <div id="backtotop"><a href="#"></a></div>

                <div className="pricing-container">
                    <div className="pricing-switcher">
                        <p className="fieldset">
                            <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked/>
                                <label htmlFor="monthly-1">Monthly</label>
                                <input type="radio" name="duration-1" value="yearly" id="yearly-1"/>
                                    <label htmlFor="yearly-1">Yearly</label>
                                    <span className="switch"></span>
                        </p>
                    </div>
                    <ul className="pricing-list bounce-invert">
                        <li>
                            <ul className="pricing-wrapper">
                                <li data-type="monthly" className="is-visible">
                                    <header className="pricing-header">
                                        <h2>Basic</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">30</span>
                                            <span className="duration">mo</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>5</em> Email Accounts</li>
                                            <li><em>1</em> Template Style</li>
                                            <li><em>25</em> Products Loaded</li>
                                            <li><em>1</em> Image per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                                <li data-type="yearly" className="is-hidden">
                                    <header className="pricing-header">
                                        <h2>Basic</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">320</span>
                                            <span className="duration">yr</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>5</em> Email Accounts</li>
                                            <li><em>1</em> Template Style</li>
                                            <li><em>25</em> Products Loaded</li>
                                            <li><em>1</em> Image per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                            </ul>
                        </li>
                        <li className="exclusive">
                            <ul className="pricing-wrapper">
                                <li data-type="monthly" className="is-visible">
                                    <header className="pricing-header">
                                        <h2>Exclusive</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">60</span>
                                            <span className="duration">mo</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>15</em> Email Accounts</li>
                                            <li><em>3</em> Template Styles</li>
                                            <li><em>40</em> Products Loaded</li>
                                            <li><em>7</em> Images per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                                <li data-type="yearly" className="is-hidden">
                                    <header className="pricing-header">
                                        <h2>Exclusive</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">630</span>
                                            <span className="duration">yr</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>15</em> Email Accounts</li>
                                            <li><em>3</em> Template Styles</li>
                                            <li><em>40</em> Products Loaded</li>
                                            <li><em>7</em> Images per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="pricing-wrapper">
                                <li data-type="monthly" className="is-visible">
                                    <header className="pricing-header">
                                        <h2>Pro</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">90</span>
                                            <span className="duration">mo</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>20</em> Email Accounts</li>
                                            <li><em>5</em> Template Styles</li>
                                            <li><em>50</em> Products Loaded</li>
                                            <li><em>10</em> Images per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                                <li data-type="yearly" className="is-hidden">
                                    <header className="pricing-header">
                                        <h2>Pro</h2>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="value">950</span>
                                            <span className="duration">yr</span>
                                        </div>
                                    </header>
                                    <div className="pricing-body">
                                        <ul className="pricing-features">
                                            <li><em>20</em> Email Accounts</li>
                                            <li><em>5</em> Template Styles</li>
                                            <li><em>50</em> Products Loaded</li>
                                            <li><em>10</em> Images per Product</li>
                                            <li><em>Unlimited</em> Bandwidth</li>
                                            <li><em>24/7</em> Support</li>
                                        </ul>
                                    </div>
                                    <footer className="pricing-footer">
                                        <a className="select" href="#">Sign Up</a>
                                    </footer>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <script type="text/javascript" src="Untitled-9.js"></script>

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


            </div>


        );
    }
}

export default withTranslation()(realstatePanel);
