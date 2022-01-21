import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ReactPaginate from 'react-paginate';
import Services from "../../utils/Services";
import _ from 'underscore';
import {NotificationContainer, NotificationManager} from "react-notifications";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as StringUtils from "../../utils/StringUtils";

class advertisingPage extends React.Component {

    constructor(props) {
        super(props);
        let {requestData} = props.location.state ? props.location.state : {};
        this.state = {
            advertiseList: [],
            configList: [],
            isLoading: false,
            offset: 0,
            length: 6,
            totalCount: 0,
            requestData: requestData ? requestData : {}
        };
        this.finalEquipmentList = [];
    }

    hideLoading() {
        this.setState({
            isLoading: false
        })
    }

    getConfigList() {
        Services.getConfigList().then(response => {
            this.setState({
                configList: response.data[0]
            })
        }).catch(error => {

        })
    }

    componentDidMount() {
        this.getConfigList();
        this.getAdvertises(0, 6);
        let root = document.getElementById('root-div');

        var element = document.createElement("script");
        element.src = "../scripts/jquery-3.4.1.min.js";
        element.type = "text/javascript";
        root.appendChild(element);

        $(document).ready(function () {
            $('html').removeClass('mm-blocking mm-opened mm-background mm-opening');

            var element = document.createElement("script");
            element.src = "../scripts/rangeSlider.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/slick.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/owl.carousel.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/chosen.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

        })
    }

    getAdvertises() {
        this.setState({
            isLoading: true
        }, () => {
            this.state.requestData.offset = this.state.offset;
            this.state.requestData.length = this.state.length;
            Services.searchAdvertiseList(this.state.requestData).then(response => {
                this.hideLoading();
                this.setState({
                    totalCount: response.data.totalCount,
                    advertiseList: response.data.data
                })
            }).catch(error => {
                this.hideLoading();
                NotificationManager.error('خطا', 'خطا در یافتن آگهی', 5000);
            })
        })
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset, length: (this.state.length + offset)}, () => {
            this.getAdvertises();
        });
    };

    advertiseDetail = (advertise) => {
        this.props.history.push({
            pathname: '/advertiseDetail',
            state: {
                advertise: advertise
            }
        });
    };

    isSale(saleType) {
        return saleType === 'فروشی' || saleType === 'معاوضه' || saleType === 'مشارکت'
    }

    renderAmount(advertise) {
        if (this.isSale(advertise.sale)) {
            return (
                <span className="listing-compact-title"><i>{advertise.totalPrice ? StringUtils.commify(advertise.totalPrice) : ''} تومان</i></span>
            )
        } else {
            return (
                <span
                    className="listing-compact-title"><i>{advertise.mortgage ? (advertise.mortgage ? StringUtils.commify(advertise.mortgage) : '') : (advertise.rent ? StringUtils.commify(advertise.rent) : '')} تومان</i></span>
            )
        }
    }

    render() {
        return (
            <div id="root-div">
                <NotificationContainer/>

                <div className="clearfix"></div>


                <div className="container">
                    <div className="row sticky-wrapper">

                        <div className="col-md-8">

                            <div className="main-search-input margin-bottom-35">
                                <input id='address' type="text" className="ico-01" placeholder="آدرس را وارد کنید"/>
                            </div>

                            <div className="row margin-bottom-15">


                            </div>


                            <div className="row">

                                {this.state.advertiseList.map(advertise => {
                                    return (
                                        <div className="col-md-6">
                                            <div className="listing-item compact">

                                                <a onClick={() => {
                                                    this.advertiseDetail(advertise);
                                                }} className="listing-img-container">

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

                                                    {(advertise.images && advertise.images[0] && !_.isEmpty(advertise.images[0].filename)) ?
                                                        <img
                                                            src={Services.getAdvertiseImageDownloadUrl(advertise.images[0].filename)}
                                                            alt=""/> :
                                                        <img
                                                            src={require('../image/house-advertise.png')}
                                                            alt=""/>}

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
                                            <select id='saleType' data-placeholder="وضعیت"
                                                    className="chosen-select-no-single">
                                                <option></option>
                                                <option>فروشی</option>
                                                <option>اجاره ای</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row with-forms">
                                        <div className="col-md-12">
                                            <select id='type' data-placeholder="نوع"
                                                    className="chosen-select-no-single">
                                                <option></option>
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
                                            <select id='city' data-placeholder="شهرستان" className="chosen-select">
                                                <option></option>
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
                                            <select id='room' data-placeholder="اتاق خواب"
                                                    className="chosen-select-no-single">
                                                <option label=""></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <select id='unitWC' data-placeholder="حمام"
                                                    className="chosen-select-no-single">
                                                <option label=""></option>
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
                                        <div id="sale-price-range" data-min="0" data-max="4000000000"
                                             data-unit="تومان"></div>
                                        <div className="clearfix"></div>
                                    </div>


                                    <a href="#"
                                       className="more-search-options-trigger margin-bottom-10 margin-top-30"
                                       data-open-title="گزینه های بیشتر" data-close-title="بستن"></a>

                                    <div className="more-search-options relative">

                                        <div className="checkboxes one-in-row margin-bottom-10">

                                            {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                return (
                                                    <div key={equipment} style={{width: '33%'}}>
                                                        <input id={equipment} type="checkbox"
                                                               name="check"
                                                               onChange={(e) => {
                                                                   if (e.target.checked) {
                                                                       !this.finalEquipmentList.includes(e.target.id) && this.finalEquipmentList.push(e.target.id)
                                                                   } else {
                                                                       if (this.finalEquipmentList.includes(e.target.id)) {
                                                                           this.finalEquipmentList = this.finalEquipmentList.filter(equipment => equipment !== e.target.id)
                                                                       }
                                                                   }
                                                               }}/>
                                                        <label style={{fontSize: '2.25vh'}} htmlFor={equipment}>{equipment}</label>
                                                    </div>
                                                )
                                            })}

                                        </div>

                                    </div>

                                    {this.state.isLoading ?
                                        <ScaleLoader loading={true} color={"#274abb"} size={150}/> :
                                        <button onClick={() => {
                                            this.setState({
                                                offset: 0,
                                                length: 6,
                                                requestData: {
                                                    address: _.compact([
                                                        !_.isEmpty(document.querySelector('#address').value) ? document.querySelector('#address').value : undefined,
                                                    ]),
                                                    sale: _.compact([
                                                        document.getElementById('saleType').value !== 'وضعیت' ? document.getElementById('saleType').value : undefined
                                                    ]),
                                                    type: document.getElementById('type').value !== 'نوع' ? document.getElementById('type').value : undefined,
                                                    city: _.compact([
                                                        document.getElementById('city').value
                                                    ]),
                                                    room: document.getElementById('room').value !== '' ? document.getElementById('room').value : undefined,
                                                    unitWC: document.getElementById('unitWC').value !== '' ? document.getElementById('unitWC').value : undefined,
                                                    fromTotalPrice: this.isSale(document.getElementById('saleType').value) ? parseInt(document.getElementById('sale-price-range-min').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
                                                    toTotalPrice: this.isSale(document.getElementById('saleType').value) ? parseInt(document.getElementById('sale-price-range-max').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
                                                    fromArea: document.getElementById('area-range-advertise-min') ? parseInt(document.getElementById('area-range-advertise-min').value.match(/\d+/)[0]) : undefined,
                                                    toArea: document.getElementById('area-range-advertise-max') ? parseInt(document.getElementById('area-range-advertise-max').value.match(/\d+/)[0]) : undefined,
                                                    equipments: this.finalEquipmentList
                                                }
                                            }, () => {this.getAdvertises()})
                                        }} className="button fullwidth margin-top-30">جستجو</button>
                                    }


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
