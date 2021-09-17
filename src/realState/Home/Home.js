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
            configList: []
        };
        this.finalEquipmentListSale = [];
        this.finalEquipmentListRent = [];
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
        this.getConfigList();
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
                                                <label id='titleTable1' className="active"><input className="first-tab"
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
                                                    <button onClick={this.searchSale} className="button">جست و جو</button>
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
                                                                        <label htmlFor={equipment}>{equipment}</label>
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
                                                    <button onClick={this.searchRent} className="button">جست و جو</button>
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
                                                                        <label htmlFor={equipment}>{equipment}</label>
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
                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">275,000 تومان <i>520 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip" data-tip-content=""></span>

                                            </div>

                                            <div className="listing-carousel">
                                                <div><img src={require("../image/listing-01.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01b.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-01c.jpg")} alt=""/></div>
                                            </div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">مجتمع آپارتمانی عقاب</a></h4>
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        <ul className="listing-features">
                                            <li>مساحت <span>530 متر مربع</span></li>
                                            <li>اتاق <span>2</span></li>
                                            <li>حمام <span>1</span></li>
                                        </ul>

                                        <div className="listing-footer">
                                        </div>

                                    </div>

                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-2.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">900 تومان <i>ماهیانه</i></span>
                                                <span className="like-icon with-tip" data-tip-content=""></span>

                                            </div>

                                            <img src={require("../image/listing-02.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-2.html">یک طبقه</a></h4>

                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        <ul className="listing-features">
                                            <li>مساحت <span>440 متر مربع</span></li>
                                            <li>اتاق <span>2</span></li>
                                            <li>حمام <span>1</span></li>
                                        </ul>

                                        <div className="listing-footer">
                                        </div>

                                    </div>

                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">

                                        <a href="single-property-page-1.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span className="featured">ویژه</span>
                                                <span>اجاره ای</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span className="listing-price">1700 تومان <i>ماهیانه</i></span>
                                                <span className="like-icon with-tip" data-tip-content=""></span>

                                            </div>

                                            <img src={require("../image/listing-03.jpg")} alt=""/>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">ویلایی</a></h4>

                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        <ul className="listing-features">
                                            <li>مساحت <span>1450 متر مربع</span></li>
                                            <li>اتاق <span>2</span></li>
                                            <li>حمام <span>3</span></li>
                                        </ul>

                                        <div className="listing-footer">
                                        </div>

                                    </div>

                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">


                                        <a href="single-property-page-3.html" className="listing-img-container">

                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">420,000 تومان <i>770 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip" data-tip-content=""></span>
                                                <span className="compare-button with-tip" data-tip-content=""></span>
                                            </div>

                                            <div className="listing-carousel">
                                                <div><img src={require("../image/listing-04.jpg")} alt=""/></div>
                                                <div><img src={require("../image/listing-04b.jpg")} alt=""/></div>
                                            </div>

                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-3.html">آپارتمان</a></h4>

                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        <ul className="listing-features">
                                            <li>مساحت <span>540 متر مربع</span></li>
                                            <li>اتاق <span>2</span></li>
                                            <li>حمام <span>2</span></li>
                                        </ul>

                                        <div className="listing-footer">

                                        </div>

                                    </div>

                                </div>

                                <div className="carousel-item">
                                    <div className="listing-item">


                                        <a href="single-property-page-1.html" className="listing-img-container">
                                            <div className="listing-badges">
                                                <span>فروشی</span>
                                            </div>

                                            <div className="listing-img-content">
                                                <span
                                                    className="listing-price">535,000 تومان <i>640 تومان / متر مربع</i></span>
                                                <span className="like-icon with-tip" data-tip-content=""></span>
                                                <span className="compare-button with-tip" data-tip-content=""></span>
                                            </div>

                                            <img src={require("../image/listing-05.jpg")} alt=""/>
                                        </a>

                                        <div className="listing-content">

                                            <div className="listing-title">
                                                <h4><a href="single-property-page-1.html">خانه ویلایی</a></h4>

                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        <ul className="listing-features">
                                            <li>مساحت <span>350 متر مربع</span></li>
                                            <li>اتاق <span>2</span></li>
                                            <li>حمام <span>1</span></li>
                                        </ul>

                                        <div className="listing-footer">
                                            <a href="#"><i className="fa fa-user"></i> </a>
                                            <span><i className="fa fa-calendar-o"></i> </span>
                                        </div>

                                    </div>

                                </div>
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

                            <div className="col-md-4">
                                <div className="blog-post">
                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/real-estate1.jpeg")} alt=""/>
                                    </a>
                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 1</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/real-estate1.jpeg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 2</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="blog-post">

                                    <a href="blog-post.html" className="post-img">
                                        <img src={require("../image/REAL-ESTATE.jpg")} alt=""/>
                                    </a>

                                    <div className="post-content">
                                        <h3><a href="#">مقاله شماره 3</a></h3>


                                        <a href="blog-post.html" className="read-more">ادامه <i
                                            className="fa fa-angle-left"></i></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default withTranslation()(Home);
