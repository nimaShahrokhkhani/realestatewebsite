import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';

class submit extends React.Component {

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

                <div id="titlebar" className="submit-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2><i className="fa fa-plus-circle"></i> افزودن ملک</h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="submit-page">


                                <h3>مشخصات خانه</h3>
                                <div className="submit-section">

                                    <div className="form">
                                        <h5>عنوان ملک </h5>
                                        <input className="search-field" type="text" value=""/>
                                    </div>

                                    <div className="row with-forms">

                                        <div className="col-md-6">
                                            <h5>وضعیت</h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>فروشی</option>
                                                <option>اجاره ای</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <h5>نوع</h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>آپارتمان</option>
                                                <option>خانه</option>
                                                <option>تجاری</option>
                                                <option>گاراژ</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="row with-forms">

                                        <div className="col-md-4">
                                            <h5>قیمت </h5>
                                            <div className="select-input disabled-first-option">
                                                <input type="text" data-unit="تومان"/>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>مساحت</h5>
                                            <div className="select-input disabled-first-option">
                                                <input type="text" data-unit="متر مربع"/>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>اتاق</h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>بیشتر از 5 اتاق</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>

                                <h3>گالری</h3>
                                <div className="submit-section">
                                    <form action="/file-upload" className="dropzone"></form>
                                </div>


                                <h3>موقعیت مکانی</h3>
                                <div className="submit-section">

                                    <div className="row with-forms">

                                        <div className="col-md-6">
                                            <h5>آدرس</h5>
                                            <input type="text"/>
                                        </div>

                                        <div className="col-md-6">
                                            <h5>شهر</h5>
                                            <input type="text"/>
                                        </div>

                                        <div className="col-md-6">
                                            <h5>استان</h5>
                                            <input type="text"/>
                                        </div>

                                        <div className="col-md-6">
                                            <h5>کد پستی</h5>
                                            <input style="direction:ltr" type="text"/>
                                        </div>

                                    </div>

                                </div>


                                <h3>اطلاعات بیشتر</h3>
                                <div className="submit-section">

                                    <div className="form">
                                        <h5>توضیحات</h5>
                                        <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary"
                                                  spellCheck="true"></textarea>
                                    </div>

                                    <div className="row with-forms">

                                        <div className="col-md-4">
                                            <h5>عمر ساخت <span>(اختیاری)</span></h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>0 - 1 سال</option>
                                                <option>0 - 5 سال</option>
                                                <option>0 - 10 سال</option>
                                                <option>0 - 20 سال</option>
                                                <option>0 - 50 سال</option>
                                                <option>بالای 50 سال</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>اتاق خواب <span>(اختیاری)</span></h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>حمام <span>(اختیاری)</span></h5>
                                            <select className="chosen-select-no-single">
                                                <option label="blank"></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>

                                    </div>


                                    <h5 className="margin-top-30">ویژگی های دیگر <span>(اختیاری)</span></h5>
                                    <div className="checkboxes in-row margin-bottom-20">

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

                                                            <input id="check-7" type="checkbox" name="check"/>
                                                                <label htmlFor="check-7">زنگ خطر</label>

                                                                <input id="check-8" type="checkbox" name="check"/>
                                                                    <label htmlFor="check-8">پوشش پنجره</label>

                                    </div>

                                </div>


                                <h3>اطلاعات تماس</h3>
                                <div className="submit-section">

                                    <div className="row with-forms">

                                        <div className="col-md-4">
                                            <h5>نام</h5>
                                            <input type="text"/>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>ایمیل</h5>
                                            <input type="text" style="direction:ltr"/>
                                        </div>

                                        <div className="col-md-4">
                                            <h5>تلفن <span>(اختیاری)</span></h5>
                                            <input type="text" style="direction:ltr"/>
                                        </div>

                                    </div>

                                </div>


                                <div className="divider"></div>
                                <a href="#" className="button preview margin-top-5">ثبت <i
                                    className="fa fa-arrow-circle-left"></i></a>

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


                <script type="text/javascript" src="scripts/dropzone.js"></script>



            </div>
        );
    }
}

export default withTranslation()(submit);

