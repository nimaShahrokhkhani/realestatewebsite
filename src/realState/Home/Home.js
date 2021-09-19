import React from 'react';
import './Home.css';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import ScriptTag from 'react-script-tag';
import Services from "../../utils/Services";
import _ from "underscore";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            configList: [],
            blogList: [],
            latestAdvertiseList: []
        };
        this.finalEquipmentListSale = [];
        this.finalEquipmentListRent = [];
    }

    getLatestAdvertiseList() {
        Services.latestAdvertiseList({offset: 0, length: 6}).then(response => {
            this.setState({latestAdvertiseList: response.data.data})
        })
    }

    getBlogList() {
        Services.getBlogList({offset: 0, length: 3}).then((response) => {
            this.setState({blogList: response.data.data})
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

    onTabClick(tab) {
        let tab1 = document.getElementById('tab1');
        let tab2 = document.getElementById('tab2');
        let titleTable1 = document.getElementById('titleTable1');
        let titleTable2 = document.getElementById('titleTable2');
        if (tab === 'tab1') {
            tab1.style.display = 'block';
            tab2.style.display = 'none';
            titleTable1.className = 'active';
            titleTable2.className = '';
        } else {
            tab2.style.display = 'block';
            tab1.style.display = 'none';
            titleTable1.className = '';
            titleTable2.className = 'active';
        }
    }

    componentDidMount() {
        this.getLatestAdvertiseList();
        this.getConfigList();
        this.getBlogList();
        let root = document.getElementById('home-div');

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

    searchSale = () => {
        let requestData = {
            address: _.compact([
                !_.isEmpty(document.querySelector('#addressTab1').value) ? document.querySelector('#addressTab1').value : undefined,
            ]),
            sale: _.compact([
                'فروشی'
            ]),
            type: document.getElementById('typeTab1').value !== '' ? document.getElementById('typeTab1').value : undefined,
            room: document.getElementById('roomNumberTab1').value !== '' ? document.getElementById('roomNumberTab1').value : undefined,
            unitWC: document.getElementById('wcTab1').value !== '' ? document.getElementById('wcTab1').value : undefined,
            fromTotalPrice: document.getElementById('minTotalPriceTab1').value !== '' ? parseInt(document.getElementById('minTotalPriceTab1').value) : undefined,
            toTotalPrice: document.getElementById('maxTotalPriceTab1').value !== '' ? parseInt(document.getElementById('maxTotalPriceTab1').value) : undefined,
            fromArea: document.getElementById('areaMinTab1').value !== '' ? parseInt(document.getElementById('areaMinTab1').value) : undefined,
            toArea: document.getElementById('areaMaxTab1').value !== '' ? parseInt(document.getElementById('areaMaxTab1').value) : undefined,
            equipments: this.finalEquipmentListSale
        };
        this.props.history.push({
            pathname: '/advertise',
            state: {
                requestData: requestData
            }
        });
    };

    searchRent = () => {
        let requestData = {
            address: _.compact([
                !_.isEmpty(document.querySelector('#addressTab2').value) ? document.querySelector('#addressTab2').value : undefined,
            ]),
            sale: _.compact([
                'اجاره ای'
            ]),
            type: document.getElementById('typeTab2').value !== '' ? document.getElementById('typeTab2').value : undefined,
            room: document.getElementById('roomNumberTab2').value !== '' ? document.getElementById('roomNumberTab2').value : undefined,
            unitWC: document.getElementById('wcTab2').value !== '' ? document.getElementById('wcTab2').value : undefined,
            fromRent: document.getElementById('minRentTab2').value !== '' ? parseInt(document.getElementById('minRentTab2').value) : undefined,
            toRent: document.getElementById('maxRentTab2').value !== '' ? parseInt(document.getElementById('maxRentTab2').value) : undefined,
            fromMortgage: document.getElementById('minMortgageTab2').value !== '' ? parseInt(document.getElementById('minMortgageTab2').value) : undefined,
            toMortgage: document.getElementById('maxMortgageTab2').value !== '' ? parseInt(document.getElementById('maxMortgageTab2').value) : undefined,
            fromArea: document.getElementById('areaMinTab2').value !== '' ? parseInt(document.getElementById('areaMinTab2').value) : undefined,
            toArea: document.getElementById('areaMaxTab2').value !== '' ? parseInt(document.getElementById('areaMaxTab2').value) : undefined,
            equipments: this.finalEquipmentListSale
        };
        this.props.history.push({
            pathname: '/advertise',
            state: {
                requestData: requestData
            }
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

    onBlogClick = (blog) => {
        this.props.history.push({
            pathname: '/blogDetail',
            state: {
                blog: blog
            }
        });
    };

    isSale(saleType) {
        return saleType === 'فروشی' || saleType === 'معاوضه' || saleType === 'مشارکت'
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
            <div id='home-div'>
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
                                                <label id='titleTable1' className="active"><input
                                                    className="first-tab"
                                                    name="tab[]"
                                                    onClick={() => this.onTabClick('tab1')}
                                                    type="radio"/>فروشی</label>
                                                <label id='titleTable2'><input name="tab[]"
                                                                               onClick={() => this.onTabClick('tab2')}
                                                                               type="radio"/>اجاره</label>
                                            </div>
                                            <div id="tab1" className="main-search-box">
                                                <div className="main-search-input larger-input">
                                                    <input type="text" className="ico-01"
                                                           placeholder="آدرس را وارد کنید."
                                                           id="addressTab1"/>
                                                    <button onClick={this.searchSale} className="button">جست و جو
                                                    </button>
                                                </div>
                                                <div className="row with-forms">
                                                    <div className="col-md-4">
                                                        <select data-placeholder="نوع"
                                                                className="chosen-select-no-single"
                                                                id="typeTab1">
                                                            <option></option>
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
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداقل قیمت"
                                                                   data-unit="تومان"
                                                                   id="minTotalPriceTab1"/>
                                                            <select>
                                                                <option></option>
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
                                                                   data-unit="تومان"
                                                                   id="maxTotalPriceTab1"/>
                                                            <select>
                                                                <option></option>
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
                                                                           data-unit="متر مربع" id="areaMinTab1"/>
                                                                    <select>
                                                                        <option></option>
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
                                                                           data-unit="متر مربع" id="areaMaxTab1"/>
                                                                    <select>
                                                                        <option></option>
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
                                                                        className="chosen-select-no-single"
                                                                        id="roomNumberTab1">
                                                                    <option></option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select data-placeholder="حمام/دستشویی" id='wcTab1'
                                                                        className="chosen-select-no-single">
                                                                    <option></option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="checkboxes in-row">

                                                            {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                                return (
                                                                    <div style={{width: '25%'}}>
                                                                        <input id={equipment} type="checkbox"
                                                                               name="check"
                                                                               onChange={(e) => {
                                                                                   if (e.target.checked) {
                                                                                       !this.finalEquipmentListSale.includes(e.target.id) && this.finalEquipmentListSale.push(e.target.id)
                                                                                   } else {
                                                                                       if (this.finalEquipmentListSale.includes(e.target.id)) {
                                                                                           this.finalEquipmentListSale = this.finalEquipmentListSale.filter(equipment => equipment !== e.target.id)
                                                                                       }
                                                                                   }
                                                                               }}/>
                                                                        <label
                                                                            htmlFor={equipment}>{equipment}</label>
                                                                    </div>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab2" style={{display: "none"}} className="main-search-box">
                                                <div className="main-search-input larger-input">
                                                    <input type="text" className="ico-01"
                                                           placeholder="آدرس را وارد کنید."
                                                           id="addressTab2"/>
                                                    <button onClick={this.searchRent} className="button">جست و جو
                                                    </button>
                                                </div>
                                                <div className="row with-forms">
                                                    <div className="col-md-4">
                                                        <select data-placeholder="Any Type"
                                                                className="chosen-select-no-single"
                                                                id="typeTab2">
                                                            <option></option>
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
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداقل قیمت رهن"
                                                                   data-unit="تومان"
                                                                   id="minMortgageTab2"/>
                                                            <select>
                                                                <option></option>
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
                                                            <input type="text" placeholder="حداکثر قیمت رهن"
                                                                   data-unit="تومان"
                                                                   id="maxMortgageTab2"/>
                                                            <select>
                                                                <option></option>
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
                                                            <input type="text" placeholder="حداقل قیمت اجاره"
                                                                   data-unit="تومان"
                                                                   id="minRentTab2"/>
                                                            <select>
                                                                <option></option>
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
                                                            <input type="text" placeholder="حداکثر قیمت اجاره"
                                                                   data-unit="تومان"
                                                                   id="maxRentTab2"/>
                                                            <select>
                                                                <option></option>
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
                                                                           data-unit="متر مربع" id="areaMinTab2"/>
                                                                    <select>
                                                                        <option></option>
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
                                                                           data-unit="متر مربع" id="areaMaxTab2"/>
                                                                    <select>
                                                                        <option></option>
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
                                                                        className="chosen-select-no-single"
                                                                        id="roomNumberTab2">
                                                                    <option></option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select data-placeholder="حمام"
                                                                        className="chosen-select-no-single"
                                                                        id="wcTab2">
                                                                    <option></option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className="checkboxes in-row">

                                                            {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                                return (
                                                                    <div style={{width: '25%'}}>
                                                                        <input id={equipment} type="checkbox"
                                                                               name="check"
                                                                               onChange={(e) => {
                                                                                   if (e.target.checked) {
                                                                                       !this.finalEquipmentListRent.includes(e.target.id) && this.finalEquipmentListRent.push(e.target.id)
                                                                                   } else {
                                                                                       if (this.finalEquipmentListRent.includes(e.target.id)) {
                                                                                           this.finalEquipmentListRent = this.finalEquipmentListRent.filter(equipment => equipment !== e.target.id)
                                                                                       }
                                                                                   }
                                                                               }}/>
                                                                        <label
                                                                            htmlFor={equipment}>{equipment}</label>
                                                                    </div>
                                                                )
                                                            })}

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
                                {this.state.latestAdvertiseList.map(advertise => {
                                    return (
                                        <a onClick={() => {
                                            this.advertiseDetail(advertise);
                                        }} className="carousel-item">
                                            <div className="listing-item">

                                                <a className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>{advertise.sale}</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        {this.renderAmount(advertise)}

                                                    </div>

                                                    <div className="listing-carousel">
                                                        {advertise.images.map(image => {
                                                            return (
                                                                <div><img
                                                                    src={Services.getAdvertiseImageDownloadUrl(image.filename)}
                                                                    alt=""/></div>
                                                            )
                                                        })}
                                                    </div>

                                                </a>

                                                <div className="listing-content">

                                                    <div className="listing-title">
                                                        <h4><a
                                                            href="single-property-page-1.html">{advertise.title}</a>
                                                        </h4>
                                                        <i className="fa fa-map-marker"></i>
                                                    </div>
                                                </div>

                                                <ul className="listing-features">
                                                    <li>مساحت <span>{advertise.area} متر مربع</span></li>
                                                    <li>تعداد اتاق ها <span>{advertise.unitRoom}</span></li>
                                                    <li>شهر <span>{advertise.city}</span></li>
                                                </ul>

                                                <div className="listing-footer">
                                                </div>

                                            </div>

                                        </a>
                                    )
                                })}
                            </div>

                        </div>

                    </div>


                </div>

                <section className="fullwidth margin-top-105" data-background-color="#f7f7f7">

                    <h3 className="headline-box">معرفی نرم افزار ساتر املاک</h3>
                    <div className="introduction-software">
                        <img src={require("../image/software.jpg")} alt=""/>

                    </div>

                </section>

                <section className="fullwidth margin-top-95 margin-bottom-0">

                    <h3 className="headline-box">مقالات و نکته ها</h3>

                    <div className="container">
                        <div className="row">

                            {this.state.blogList.map(blog => {
                                return(
                                    <div className="col-md-4">
                                        <div className="blog-post">
                                            <a className="post-img">
                                                <img src={blog.contentImage} alt=""/>
                                            </a>
                                            <div className="post-content">
                                                <h3><a href="#">{blog.title}1</a></h3>


                                                <a onClick={() => {
                                                    this.onBlogClick(blog)
                                                }} className="read-more">ادامه <i
                                                    className="fa fa-angle-left"></i></a>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default withTranslation()(Home);
