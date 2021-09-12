import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import Services from "../../utils/Services";

class advertisingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advertiseList: [],
            offset: 0,
            length: 6,
            totalCount: 0
        }
    }

    componentDidMount() {
        this.getAdvertises(0, 6);
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

    getAdvertises() {
        let requestData = {
            offset: this.state.offset,
            length: this.state.length
        };
        Services.searchAdvertiseList(requestData).then(response => {
            console.log('data=>', response.data)
            this.setState({
                totalCount: response.data.totalCount,
                advertiseList: response.data.data
            })
        }).catch(error => {

        })
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset, length: (this.state.length + offset)}, () => {
            this.getAdvertises();
        });
    };

    isSale(saleType) {
        return saleType === 'فروش' || saleType === 'معاوضه' || saleType === 'مشارکت'
    }

    renderAmount(advertise) {
        if (this.isSale(advertise.sale)) {
            return (
                <span className="listing-compact-title"><i>{advertise.totalPrice} تومان</i></span>
            )
        } else {
            return (
                <span
                    className="listing-compact-title"><i>{advertise.mortgage ? advertise.mortgage : advertise.rent} تومان</i></span>
            )
        }
    }

    render() {
        return (
            <div id="root-div">


                <div className="clearfix"></div>


                <div className="container">
                    <div className="row sticky-wrapper">

                        <div className="col-md-8">

                            <div className="main-search-input margin-bottom-35">
                                <input type="text" className="ico-01" placeholder="آدرس را وارد کنید"/>
                                <button className="button">جست و جو</button>
                            </div>

                            <div className="row margin-bottom-15">


                            </div>


                            <div className="row">

                                {this.state.advertiseList.map(advertise => {
                                    return (
                                        <div className="col-md-6">
                                            <div className="listing-item compact">

                                                <a href="single-property-page-1.html" className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>{advertise.sale}</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        <span className="listing-compact-title"><i>{advertise.title}</i></span>
                                                        {this.renderAmount(advertise)}

                                                        <ul className="listing-hidden-content">
                                                            <li>مساحت <span>{advertise.area} متر مربع</span></li>
                                                            <li>تعداد اتاق ها <span>{advertise.unitRoom}</span></li>
                                                            <li>شهر <span>{advertise.city}</span></li>
                                                        </ul>
                                                    </div>

                                                    <img src={require("../image/listing-01.jpg")} alt=""/>
                                                </a>

                                            </div>
                                        </div>
                                    )
                                })}

                            </div>


                            <div className="clearfix"></div>
                            <div className="pagination-container margin-top-20">
                                <ReactPaginate
                                    previousLabel={'قبلی'}
                                    nextLabel={'بعدی'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={(parseInt(this.state.totalCount) / 6)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />
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

                                    <br/>

                                    <div className="range-slider">
                                        <label>مساحت</label>
                                        <div id="area-range-advertise" data-min="0" data-max="1500"
                                             data-unit="مترمربع"></div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <br/>

                                    <div className="range-slider">
                                        <label>قیمت</label>
                                        <div id="sale-price-range" data-min="0" data-max="400000"
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


            </div>

        );
    }
}

export default withTranslation()(advertisingPage);
