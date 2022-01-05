import React from 'react';
import './Home.css';
import '../css/style.css';
import '../css/color.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
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
            fromTotalPrice: document.getElementById('minTotalPriceTab1').value !== '' ? this.convertAmount(document.getElementById('minTotalPriceTab1').value) : undefined,
            toTotalPrice: document.getElementById('maxTotalPriceTab1').value !== '' ? this.convertAmount(document.getElementById('maxTotalPriceTab1').value) : undefined,
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
            fromRent: document.getElementById('minRentTab2').value !== '' ? this.convertAmount(document.getElementById('minRentTab2').value) : undefined,
            toRent: document.getElementById('maxRentTab2').value !== '' ? this.convertAmount(document.getElementById('maxRentTab2').value) : undefined,
            fromMortgage: document.getElementById('minMortgageTab2').value !== '' ? this.convertAmount(document.getElementById('minMortgageTab2').value) : undefined,
            toMortgage: document.getElementById('maxMortgageTab2').value !== '' ? this.convertAmount(document.getElementById('maxMortgageTab2').value) : undefined,
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

    convertAmount(amount) {
        if (amount.includes('هزار')) {
            return parseInt(amount.match(/\d+/g)[0]) * 1000;
        } else if (amount.includes('میلیون')) {
            return parseInt(amount.match(/\d+/g)[0]) * 1000000;
        } else if (amount.includes('میلیارد')){
            return parseInt(amount.match(/\d+/g)[0]) * 1000000000;
        }
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
                                        <h2>اولین بانک اطلاعات املاک گیلان</h2>
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
                                                                <option>200 میلیون</option>
                                                                <option>300 میلیون</option>
                                                                <option>500 میلیون</option>
                                                                <option>750 میلیون</option>
                                                                <option>1 میلیارد</option>
                                                                <option>2 میلیارد</option>
                                                                <option>3 میلیارد</option>
                                                                <option>4 میلیارد</option>
                                                                <option>8 میلیارد</option>
                                                                <option>10 میلیارد</option>
                                                                <option>15 میلیارد</option>
                                                                <option>30 میلیارد</option>
                                                                <option>50 میلیارد </option>

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
                                                                <option> 1 میلیارد </option>
                                                                <option> 1.5 میلیارد</option>
                                                                <option> 2 میلیارد </option>
                                                                <option> 3 میلیارد </option>
                                                                <option>  5 میلیارد </option>
                                                                <option> 10 میلیارد</option>
                                                                <option>20 میلیارد</option>
                                                                <option>30 میلیارد</option>
                                                                <option>40 میلیارد</option>
                                                                <option>50 میلیارد</option>
                                                                <option>60 میلیارد</option>
                                                                <option> 80 میلیارد</option>
                                                                <option>100 میلیارد</option>
                                                                <option> 120 میلیارد</option>


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
                                                        <select data-placeholder="نوع"
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
                                                                <option>10 میلیون</option>
                                                                <option>20 میلیون</option>
                                                                <option>30 میلیون</option>
                                                                <option>40 میلیون</option>
                                                                <option> 50 میلیون</option>
                                                                <option>100 میلیون</option>
                                                                <option>150 میلیون</option>
                                                                <option>250 میلیون</option>
                                                                <option>350 میلیون</option>
                                                                <option>500 میلیون</option>
                                                                <option>750 میلیون</option>
                                                                <option>1 میلیارد</option>
                                                                <option>1.2 میلیارد</option>
                                                                <option>1.5 میلیارد</option>
                                                                <option>2 میلیارد</option>
                                                                <option>3 میلیارد</option>
                                                                <option>5 میلیارد</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداکثر قیمت رهن"
                                                                   data-unit="تومان"
                                                                   id="maxMortgageTab2"/>
                                                            <select>
                                                                <option>10 میلیون</option>
                                                                <option>20 میلیون</option>
                                                                <option>30 میلیون</option>
                                                                <option>40 میلیون</option>
                                                                <option> 50 میلیون</option>
                                                                <option>100 میلیون</option>
                                                                <option>150 میلیون</option>
                                                                <option>250 میلیون</option>
                                                                <option>350 میلیون</option>
                                                                <option>500 میلیون</option>
                                                                <option>750 میلیون</option>
                                                                <option>1 میلیارد</option>
                                                                <option>1.2 میلیارد</option>
                                                                <option>1.5 میلیارد</option>
                                                                <option>2 میلیارد</option>
                                                                <option>3 میلیارد</option>
                                                                <option>5 میلیارد</option>
                                                                <option>8 میلیارد</option>
                                                                <option>10 میلیارد</option>
                                                                <option>15 میلیارد</option>
                                                                <option>20 میلیارد</option>
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
                                                                <option>100 هزار</option>
                                                                <option>500 هزار</option>
                                                                <option>1 میلیون</option>
                                                                <option>1.5 میلیون</option>
                                                                <option>2 میلیون</option>
                                                                <option>5 میلیون</option>
                                                                <option>10 میلیون</option>
                                                                <option>20 میلیون</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="حداکثر قیمت اجاره"
                                                                   data-unit="تومان"
                                                                   id="maxRentTab2"/>
                                                            <select>
                                                                <option>500 هزار</option>
                                                                <option>1 میلیون</option>
                                                                <option>2 میلیون</option>
                                                                <option>4 میلیون</option>
                                                                <option>8 میلیون</option>
                                                                <option>10 میلیون</option>
                                                                <option>15 میلیون</option>
                                                                <option>20 میلیون</option>
                                                                <option>30 میلیون</option>
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
                                                                        <option>40</option>
                                                                        <option>60</option>
                                                                        <option>80</option>
                                                                        <option>90</option>
                                                                        <option>100</option>
                                                                        <option>140</option>
                                                                        <option>160</option>
                                                                        <option>200</option>
                                                                        <option>250</option>
                                                                        <option>300</option>
                                                                        <option>360 متر</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="حداکثر مساحت"
                                                                           data-unit="متر مربع" id="areaMaxTab2"/>
                                                                    <select>
                                                                        <option></option>
                                                                        <option>140</option>
                                                                        <option>160</option>
                                                                        <option>180</option>
                                                                        <option>190</option>
                                                                        <option>200</option>
                                                                        <option>250</option>
                                                                        <option>300</option>
                                                                        <option>350</option>
                                                                        <option>450</option>
                                                                        <option>600</option>
                                                                        <option>700</option>
                                                                        <option>800</option>



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
                                {this.state.latestAdvertiseList && this.state.latestAdvertiseList.map(advertise => {
                                    return (
                                        <a onClick={() => {
                                            this.advertiseDetail(advertise);
                                        }} className="carousel-item">
                                            <div className="listing-item">

                                                <div className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">ویژه</span>
                                                        <span>{advertise.sale}</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        {this.renderAmount(advertise)}

                                                    </div>

                                                    <div className="listing-carousel">
                                                        {advertise.images && advertise.images.map(image => {
                                                            return (
                                                                <div><img
                                                                    src={Services.getAdvertiseImageDownloadUrl(image.filename)}
                                                                    alt=""/></div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>

                                                <div className="listing-content">

                                                    <div className="listing-title">
                                                        <h4><div
                                                            href="single-property-page-1.html">{advertise.title}</div>
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

                            {this.state.blogList && this.state.blogList.map(blog => {
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
