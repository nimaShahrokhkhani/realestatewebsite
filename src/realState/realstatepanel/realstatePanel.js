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

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    render() {
        return (
            <div id="root-div" style={{marginTop: 0}}>


                <div className="clearfix"></div>

                <section className="search margin-bottom-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h3 className="search-title">جستجو املاک گیلان فایل(اشتراک)</h3>

                                <div className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single"
                                                    name="titlePanel" id="titlePanel">
                                                <option label="وضعیت"></option>
                                                <option>همه</option>
                                                <option>فروشی</option>
                                                <option>اجاره ای</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="نوع" className="chosen-select-no-single"
                                                    name="kindPanel" id="kindPanel">
                                                <option label="نوع"></option>
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

                                        <div className="col-md-6">
                                            <div className="main-search-input">
                                                <select data-placeholder="نام منطقه را وارد کنید"
                                                        className="chosen-select-no-single" name="addressPanel"
                                                        id="addressPanel">
                                                    <option label="نام منطقه را وارد کنید"></option>
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

                                            <div className="range-slider">
                                                <label>مساحت</label>
                                                <div id="area-range-panel" data-min="0" data-max="999999" data-unit="مترمربع"
                                                     name="areaPanel"></div>
                                                <div className="clearfix"></div>
                                            </div>

                                        </div>

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label>قیمت خرید و فروش</label>
                                                <div id="sale-price-range" data-min="0" data-max="900000000000"
                                                     data-unit="تومان" name="priceSellPanel"></div>
                                                <div className="clearfix"></div>
                                            </div>

                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label>قیمت رهن</label>
                                                <div id="mortgage-price-range" data-min="0" data-max="9000000000"
                                                     data-unit="تومان" name="priceRahnPanel"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label> قیمت اجاره</label>
                                                <div id="rent-price-range" data-min="0" data-max="500000000"
                                                     data-unit="تومان" name="priceRentPanel"></div>
                                                <div className="clearfix"></div>
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
                                                            className="chosen-select-no-single" name="agePanel"
                                                            id="agePanel">
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
                                                    <select data-placeholder="اتاق" className="chosen-select-no-single"
                                                            name="roomPanel" id="roomPanel">
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
                                                    <select data-placeholder="حمام" className="chosen-select-no-single"
                                                            name="bathPanel" id="bathPanel">
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
                                                    <select data-placeholder="نما" className="chosen-select-no-single"
                                                            name="facadePanel" id="facadePanel">
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
                                                            className="chosen-select-no-single" name="numberHousePanel"
                                                            id="numberHousePanel">
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
                                                            className="chosen-select-no-single" name="kitPanel"
                                                            id="kitPanel">
                                                        <option label="آشپزخانه"></option>
                                                        <option>mdf</option>
                                                        <option>فلزی</option>
                                                        <option>چوبی فلزی</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="کف" className="chosen-select-no-single"
                                                            name="kafPanel" id="kafPanel">
                                                        <option label="کف"></option>
                                                        <option>سنگ</option>
                                                        <option>سرامیک</option>
                                                        <option>گرانیت</option>
                                                        <option>موزاییک</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="هوشمندی"
                                                            className="chosen-select-no-single" name="bmsPanel"
                                                            id="bmsPanel">
                                                        <option label="هوشمندی"></option>
                                                        <option>دارد</option>
                                                        <option>ندارد</option>


                                                    </select>
                                                </div>


                                            </div>

                                            <div className="checkboxes in-row">

                                                <input type="checkbox" name="airConditionPanel" id="airConditionPanel"/>
                                                <label htmlFor="airConditionPanel">تهویه مطبوع</label>

                                                <input type="checkbox" name="poolPanel" id="poolPanel"/>
                                                <label htmlFor="poolPanel">استخر شنا</label>

                                                <input type="checkbox" name="centerHeaterPanel"
                                                       id="centerHeaterPanel"/>
                                                <label htmlFor="centerHeaterPanel">گرمایش مرکزی</label>

                                                <input type="checkbox" name="washingPanel"
                                                       id="washingPanel"/>
                                                <label htmlFor="washingPanel">اتاق لباسشویی</label>


                                                <input type="checkbox" name="gymPanel" id="gymPanel"/>
                                                <label htmlFor="gymPanel">باشگاه بدنسازی</label>

                                                <input type="checkbox" name="ringtonePanel"
                                                       id="ringtonePanel"/>
                                                <label htmlFor="ringtonePanel">زنگ خطر</label>

                                                <input type="checkbox" name="windowPanel"
                                                       id="windowPanel"/>
                                                <label htmlFor="windowPanel">پوشش
                                                    پنجره</label>

                                                <input type="checkbox" name="gazPanel"
                                                       id="gazPanel"/>
                                                <label htmlFor="gazPanel">گاز</label>

                                                <input type="checkbox" name="hurryPanel"
                                                       id="hurryPanel"/>
                                                <label htmlFor="hurryPanel">مالک
                                                    عجله دارد</label>
                                                <br/>

                                                <input type="checkbox"
                                                       name="heaterKafPanel"
                                                       id="heaterKafPanel"/>
                                                <label htmlFor="heaterKafPanel">گرمایش
                                                    از کف</label>

                                                <input type="checkbox"
                                                       name="chilerPanel"
                                                       id="chilerPanel"/>
                                                <label
                                                    htmlFor="chilerPanel">چیلر</label>

                                                <input type="checkbox"
                                                       name="trasPanel"
                                                       id="trasPanel"/>
                                                <label
                                                    htmlFor="trasPanel">بالکن</label>

                                                <input type="checkbox"
                                                       name="fanPanel"
                                                       id="fanPanel"/>
                                                <label
                                                    htmlFor="fanPanel">فن
                                                    کويل</label>

                                                <input
                                                    type="checkbox"
                                                    name="spiletPanel"
                                                    id="spiletPanel"/>
                                                <label
                                                    htmlFor="spiletPanel">داکت
                                                    اسپیلت</label>

                                                <input
                                                    type="checkbox"
                                                    name="remotePanel"
                                                    id="remotePanel"/>
                                                <label
                                                    htmlFor="remotePanel">درب
                                                    ریموت
                                                    کنترل </label>

                                                <input
                                                    type="checkbox"
                                                    name="centerAntenPanel"
                                                    id="centerAntenPanel"/>
                                                <label
                                                    htmlFor="centerAntenPanel">آنتن
                                                    مرکزی</label>

                                                <input
                                                    type="checkbox"
                                                    name="shofPanel"
                                                    id="shofPanel"/>
                                                <label
                                                    htmlFor="shofPanel">شوفاژ</label>

                                                <input
                                                    type="checkbox"
                                                    name="anbarPanel"
                                                    id="anbarPanel"/>
                                                <label
                                                    htmlFor="anbarPanel">انباری</label>

                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section"></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>خرید اشتراک</h1>
                            <p>با خرید اشتراک اطلاعات کامل ملک ها (کلیه آرشیو موجود در سامانه) از جمله آدرس ملک , نام و
                                تماس مالک جهت ارتباط مستقیم با ایشان در اختیار شما قرار می گیرد. اشتراک به صورت مناطق در
                                جدول زیر نمایش داده شده است. </p>
                            <h4 className="text-center mb-4">تعرفه اشتراک شامل کلیه مناطق</h4>
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-primary">
                                    <tr>
                                        <th>نوع معامله</th>
                                        <th>مدت اشتراک</th>
                                        <th>مبلغ(تومان)</th>
                                        <th>تخفیف</th>
                                        <th>خرید اشتراک</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>خرید و فروش</td>
                                        <td>یک هفته</td>
                                        <td>۵۹ هزار</td>
                                        <td>۵ درصد</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>خرید و فروش</td>
                                        <td>دو هفته</td>
                                        <td>۹۹ هزار</td>
                                        <td>۵ درصد</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>خرید و فروش</td>
                                        <td>یک ماه</td>
                                        <td>۱۹۹ هزار</td>
                                        <td>۵ درصد</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>رهن و اجاره</td>
                                        <td>یک هفته</td>
                                        <td>۵۹ هزار</td>
                                        <td>۵ درصد</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>رهن و اجاره</td>
                                        <td>دو هفته</td>
                                        <td>۹۹ هزار</td>
                                        <td>۵ درصد</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">رهن و اجاره</td>
                                        <td className="border-bottom-0">یک ماه</td>
                                        <td className="border-bottom-0">۱۹۹ هزار</td>
                                        <td className="border-bottom-0">۵ درصد</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">کلیه موارد</td>
                                        <td className="border-bottom-0">یک هفته</td>
                                        <td className="border-bottom-0">۵۹ هزار</td>
                                        <td className="border-bottom-0">۵ درصد</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">کلیه موارد</td>
                                        <td className="border-bottom-0">دو هفته</td>
                                        <td className="border-bottom-0">۹۹ هزار</td>
                                        <td className="border-bottom-0">۵ درصد</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">کلیه موارد</td>
                                        <td className="border-bottom-0">یک ماه</td>
                                        <td className="border-bottom-0">۱۹۹ هزار</td>
                                        <td className="border-bottom-0">۵ درصد</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706',color: 'white'}}>خرید
                                            </button>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline margin-bottom-30 margin-top-40">نکات مهم</h3>
                        </div>


                        <div className="col-md-4">
                            <div className="numbered color filled">
                                <ol>
                                    <li>تمامی مبالغ بالا به تومان می باشد.</li>
                                    <li>با خرید اشتراک بالا تمام اطلاعات در اختیار شما قرار می گیرد.</li>
                                    <li>پس از پرداخت اشتراک شما فعال می گردد.</li>
                                    <li>امکان حذف و اصلاح برای مشترکین فعال می گردد.</li>

                                </ol>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="numbered color ">
                                <ol>
                                    <li>تمامی مبالغ بالا به تومان می باشد.</li>
                                    <li>با خرید اشتراک بالا تمام اطلاعات در اختیار شما قرار می گیرد.</li>
                                    <li>پس از پرداخت اشتراک شما فعال می گردد.</li>
                                    <li>امکان حذف و اصلاح برای مشترکین فعال می گردد.</li>

                                </ol>
                            </div>
                        </div>


                    </div>
                </div>


            </div>


        );
    }
}

export default withTranslation()(realstatePanel);
