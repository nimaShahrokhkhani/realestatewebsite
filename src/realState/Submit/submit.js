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


    componentDidMount() {
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {

            var element = document.createElement("script");
            element.src = "../scripts/jquery-migrate-3.1.0.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/magnific-popup.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/sticky-kit.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/masonry.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/tooltips.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/Utils/generalUI.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    render() {
        return (
            <div id="root-div" style={{marginTop: 0}}>
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
                                            <input className="search-field" type="text" id="titleSubmit"/>
                                        </div>

                                        <div className="row with-forms">

                                            <div className="col-md-6">
                                                <h5>وضعیت</h5>
                                                <select className="chosen-select-no-single" id="conditionSubmit">
                                                    <option label="blank"></option>
                                                    <option>فروشی</option>
                                                    <option>اجاره ای</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>نوع</h5>
                                                <select className="chosen-select-no-single" id="kindSubmit">
                                                    <option label="blank"></option>
                                                    <option>همه</option>
                                                    <option>آپارتمانی</option>
                                                    <option>خانه</option>
                                                    <option>تجاری</option>
                                                    <option>ویلا</option>
                                                    <option>زمین کشاورزی</option>
                                                    <option>اداری</option>
                                                    <option>زمین</option>
                                                    <option>مستغلات</option>
                                                </select>
                                            </div>

                                        </div>

                                        <div className="row with-forms">

                                            <div className="col-md-4">
                                                <h5>قیمت </h5>
                                                <div className="select-input disabled-first-option" id="priceSubmit">
                                                    <input type="text" data-unit="تومان"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <h5>مساحت</h5>
                                                <div className="select-input disabled-first-option">
                                                    <input type="text" data-unit="متر مربع" id="areaSubmit"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <h5>اتاق</h5>
                                                <select className="chosen-select-no-single" id="roomSubmit">
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
                                        <form action="/file-upload" className="dropzone" id="gallerySubmit"></form>
                                    </div>


                                    <h3>موقعیت مکانی</h3>
                                    <div className="submit-section">

                                        <div className="row with-forms">

                                            <div className="col-md-6">
                                                <h5>آدرس</h5>
                                                <input type="text" id="addressSubmit"/>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>شهر</h5>
                                                <input type="text" id="citySubmit"/>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>استان</h5>
                                                <input type="text" id="provinceSubmit"/>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>کد پستی</h5>
                                                <input style={{direction: "ltr"}} type="text" id="codePostAddress"/>
                                            </div>

                                        </div>

                                    </div>


                                    <h3>اطلاعات بیشتر</h3>
                                    <div className="submit-section">

                                        <div className="form">
                                            <h5>توضیحات</h5>
                                            <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary"
                                                      spellCheck="true" id="explainSubmit"/>
                                        </div>

                                        <div className="row with-forms">

                                            <div className="col-md-4">
                                                <h5>عمر ساخت <span>(اختیاری)</span></h5>
                                                <select className="chosen-select-no-single" id="ageSubmit">
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
                                                <h5>حمام <span>(اختیاری)</span></h5>
                                                <select className="chosen-select-no-single" id="bathSubmit">
                                                    <option label="blank"></option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>در اختیار مشاورین املاک <span></span></h5>
                                                <div className="allow-house">
                                                    <input type="radio" checked="checked" value="male" name="gender"
                                                           id="yesSubmit"/> قرار بگیرد<br/>
                                                    <input type="radio" value="female" name="gender"
                                                           id="noSubmit"/> قرار نگیرد


                                                </div>

                                            </div>


                                            <h5 className="margin-top-30">ویژگی های دیگر <span>(اختیاری)</span></h5>
                                            <div className="checkboxes in-row margin-bottom-20">

                                                <input id="airConditionSubmit" type="checkbox" name="check"/>
                                                <label htmlFor="airConditionSubmit">تهویه مطبوع</label>

                                                <input id="poolSubmit" type="checkbox" name="check"/>
                                                <label htmlFor="poolSubmit">استخر</label>

                                                <input id="centerHeaterSubmit" type="checkbox" name="check"/>
                                                <label htmlFor="centerHeaterSubmit">گرمایش مرکزی</label>

                                                <input id="roomWashingSubmit" type="checkbox" name="check"/>
                                                <label htmlFor="roomWashingSubmit">اتاق لباسشویی</label>


                                                <input id="gymClubSubmit" type="checkbox" name="check"/>
                                                <label htmlFor="gymClubSubmit">باشگاه
                                                    بدنسازی</label>

                                                <input id="dangerRingSubmit" type="checkbox"
                                                       name="check"/>
                                                <label htmlFor="dangerRingSubmit">زنگ
                                                    خطر</label>

                                                <input id="windowSubmit" type="checkbox"
                                                       name="check"/>
                                                <label htmlFor="windowSubmit">پوشش
                                                    پنجره</label>

                                            </div>

                                        </div>


                                        <h3>اطلاعات تماس</h3>
                                        <div className="submit-section">

                                            <div className="row with-forms">

                                                <div className="col-md-4">
                                                    <h5>نام</h5>
                                                    <input type="text" id="nameSubmit"/>
                                                </div>

                                                <div className="col-md-4">
                                                    <h5>ایمیل</h5>
                                                    <input type="text" style={{direction: "ltr"}} id="emailSubmit"/>
                                                </div>

                                                <div className="col-md-4">
                                                    <h5>تلفن <span>(اختیاری)</span></h5>
                                                    <input type="text" style={{direction: "ltr"}} id="telSubmit"/>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="divider"></div>
                                        <a className="button preview margin-top-5">ثبت <i
                                            className="fa fa-arrow-circle-left"></i></a>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(submit);

