import React from 'react';
import '../css/style.css';
import '../css/color.css';
import '../realstatepanel/realstatePanel.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import _ from "underscore";
import ScriptTag from 'react-script-tag';
import connect from "react-redux/es/connect/connect";
import {setFileSearchRequest, setState, setUser} from "../../components/redux/actions";

class realstatePanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            configList: [],
            regionNameList: []
        };
        this.finalEquipmentList = [];
    }

    getRegionNameListFromRegionCode(regionCode) {
        let regionNameList = [];
        if (!_.isEmpty(this.state.configList) && !_.isEmpty(this.state.configList.region)) {
            for (let i = 0; i < this.state.configList.region.length; i++) {
                if (regionCode === this.state.configList.region[i].regionCode) {
                    regionNameList.push(this.state.configList.region[i].regionName)
                }
            }
        }
        return regionNameList;
    }

    getRegionCodeList() {
        let regionCodeList = [];
        if (!_.isEmpty(this.state.configList) && !_.isEmpty(this.state.configList.region)) {
            for (let i = 0; i < this.state.configList.region.length; i++) {
                if (!_.contains(regionCodeList, this.state.configList.region[i].regionCode)) {
                    regionCodeList.push(this.state.configList.region[i].regionCode)
                }
            }
        }
        return regionCodeList;
    }

    getConfigList() {
        Services.getConfigList().then(response => {
            this.setState({
                configList: response.data[0]
            })
        }).catch(error => {

        })
    }

    onRegionCodeChange = (event) => {
        let regionCode = event.target.value;
        this.setState({
            regionNameList: this.getRegionNameListFromRegionCode(regionCode)
        })
    };

    isSale(saleType) {
        return saleType === 'فروش' || saleType === 'معاوضه' || saleType === 'مشارکت'
    }


    searchFile = () => {
        let saleType = document.getElementById('titlePanel').value;
        let requestObject = {
            sale: document.getElementById('titlePanel').value,
            regionCode: document.getElementById('regionCode').value,
            regionName: document.getElementById('regionName').value,
            fromArea: parseInt(document.getElementById('area-range-panel-min').value.match(/\d+/)[0]),
            toArea: parseInt(document.getElementById('area-range-panel-max').value.match(/\d+/)[0]),
            fromTotalPrice: this.isSale(saleType) ? parseInt(document.getElementById('sale-price-range-min').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            toTotalPrice: this.isSale(saleType) ? parseInt(document.getElementById('sale-price-range-max').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            fromMortgage: !this.isSale(saleType) ? parseInt(document.getElementById('mortgage-price-range-min').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            toMortgage: !this.isSale(saleType) ? parseInt(document.getElementById('mortgage-price-range-max').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            fromRent: !this.isSale(saleType) ? parseInt(document.getElementById('rent-price-range-min').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            toRent: !this.isSale(saleType) ? parseInt(document.getElementById('rent-price-range-max').value.split(' تومان')[0].replace(/,/g, '')) : undefined,
            fromAge: document.getElementById('agePanel').value.match(/\d+/g) ?
                parseInt(document.getElementById('agePanel').value.match(/\d+/g)[0]) : undefined,
            toAge: document.getElementById('agePanel').value.match(/\d+/g) ?
                parseInt(document.getElementById('agePanel').value.match(/\d+/g)[1]) : undefined,
            unitRoom: document.getElementById('roomPanel').value ?
                parseInt(document.getElementById('roomPanel').value) : undefined,
            unitKitchen: document.getElementById('unitKitchen').value ?
                parseInt(document.getElementById('unitKitchen').value) : undefined,
            frontKind: document.getElementById('frontKind').value ?
                parseInt(document.getElementById('frontKind').value) : undefined,
            fromUnitNo: document.getElementById('numberHousePanel').value === '' ? 0 : undefined,
            toUnitNo: document.getElementById('numberHousePanel').value === '' ?
                parseInt(document.getElementById('numberHousePanel').value) : undefined,
            documentKind: document.getElementById('documentKind').value === '' ?
                document.getElementById('documentKind').value : undefined,
            unitFloorCovering: document.getElementById('floorCovering').value === '' ?
                document.getElementById('floorCovering').value : undefined,
            north: document.querySelector('#direction').value ===  'شمالی' ? true : undefined,
            south: document.querySelector('#direction').value === 'جنوبی' ? true : undefined,
            east: document.querySelector('#direction').value === 'شرقی' ? true : undefined,
            west: document.querySelector('#direction').value === 'غربی' ? true : undefined,
            equipments: this.finalEquipmentList,
        };
        requestObject[document.getElementById('kindPanel').value] = true;
        this.props.setFileSearchRequest(requestObject);
        this.props.history.push({
            pathname: '/fileSearchTable'
        });
    };

    componentDidMount() {
        this.getConfigList();

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

    onTabClick(tab) {
        let tab1 = document.getElementById('tab1');
        let tab2 = document.getElementById('tab2');
        let tab3 = document.getElementById('tab3');
        let titleTable1 = document.getElementById('titleTable1');
        let titleTable2 = document.getElementById('titleTable2');
        let titleTable3 = document.getElementById('titleTable3');
        if (tab === 'tab1') {
            tab1.style.display = 'block';
            tab2.style.display = 'none';
            tab3.style.display = 'none';
            titleTable1.className = 'active';
            titleTable2.className = '';
            titleTable3.className = '';
        } else if (tab === 'tab2') {
            tab2.style.display = 'block';
            tab1.style.display = 'none';
            tab3.style.display = 'none';
            titleTable1.className = '';
            titleTable3.className = '';
            titleTable2.className = 'active';
        } else {
            tab3.style.display = 'block';
            tab1.style.display = 'none';
            tab2.style.display = 'none';
            titleTable1.className = '';
            titleTable2.className = '';
            titleTable3.className = 'active';
        }
    }

    render() {
        let regionCodeList = this.getRegionCodeList();
        return (
            <div id="root-div" style={{marginTop: 0}}>


                <div className="clearfix"></div>

                <section className="search margin-bottom-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <h3 className="search-title">جستجو املاک گیلان فایل(اشتراک)</h3>

                                <div className="search-type">
                                    <label id='titleTable1' className="active"><input
                                        className="first-tab"
                                        name="tab[]"
                                        onClick={() => this.onTabClick('tab1')}
                                        type="radio"/>فروشی</label>
                                    <label id='titleTable2'><input name="tab[]"
                                                                   onClick={() => this.onTabClick('tab2')}
                                                                   type="radio"/>اجاره</label>
                                    <label id='titleTable3'><input name="tab[]"
                                                                   onClick={() => this.onTabClick('tab3')}
                                                                   type="radio"/>رهن</label>
                                </div>
                                <div id='tab1' className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single"
                                                    name="titlePanel" id="titlePanel">
                                                <option label="وضعیت"></option>
                                                <option>فروش</option>
                                                <option>اجاره</option>
                                                <option>رهن</option>
                                                <option>مشارکت</option>
                                                <option>معاوضه</option>
                                                <option>خارجی</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="نوع" className="chosen-select-no-single"
                                                    name="kindPanel" id="kindPanel">
                                                <option label="نوع"></option>
                                                <option>آپارتمان</option>
                                                <option>ویلا</option>
                                                <option>مستغلات</option>
                                                <option>کلنگی</option>
                                                <option>دفتر کار</option>
                                                <option>زمین</option>
                                                <option>مغازه</option>
                                                <option>سوییت</option>

                                            </select>
                                        </div>

                                        <div className="col-md-2">
                                            <select data-placeholder="کد منطقه را وارد کنید" style={{color: '#888'}}
                                                    name="regionCode" id="regionCode"
                                                    onChange={this.onRegionCodeChange}>
                                                <option label="کد منطقه را وارد کنید" disabled selected></option>
                                                {regionCodeList && regionCodeList.map(regionCode => {
                                                    return (
                                                        <option>{regionCode}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="main-search-input">
                                                <select data-placeholder="نام منطقه را وارد کنید"
                                                        name="regionName" style={{color: '#888'}}
                                                        id="regionName">
                                                    <option label="نام منطقه را وارد کنید" disabled selected></option>
                                                    {this.state.regionNameList && this.state.regionNameList.map(regionName => {
                                                        return (
                                                            <option>{regionName}</option>
                                                        )
                                                    })}

                                                </select>

                                                <button className="button" onClick={this.searchFile}>جست و جو</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label>مساحت</label>
                                                <div id="area-range-panel" data-min="0" data-max="999999"
                                                     data-unit="مترمربع"
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
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>


                                                <div className="col-md-3">
                                                    <select data-placeholder="آشپزخانه" className="chosen-select-no-single"
                                                            name="unitKitchen" id="unitKitchen">
                                                        <option label="آشپزخانه"></option>
                                                        {this.state.configList.kitchenService && this.state.configList.kitchenService.map(kitchenService => {
                                                            return (
                                                                <option>{kitchenService}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="نما" className="chosen-select-no-single"
                                                            name="frontKind" id="frontKind">
                                                        <option label="نما"></option>
                                                        {this.state.configList.frontKind && this.state.configList.frontKind.map(frontKind => {
                                                            return (
                                                                <option>{frontKind}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="تعداد واحد در هر طبقه"
                                                            className="chosen-select-no-single" name="numberHousePanel"
                                                            id="numberHousePanel">
                                                        <option label="تعداد واحد در هر طبقه"></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>6</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="سند"
                                                            className="chosen-select-no-single" name="documentKind"
                                                            id="documentKind">
                                                        <option label="سند"></option>
                                                        {this.state.configList.documentKind && this.state.configList.documentKind.map(documentKind => {
                                                            return (
                                                                <option>{documentKind}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="کف" className="chosen-select-no-single"
                                                            name="floorCovering" id="floorCovering">
                                                        <option label="کف پوش"></option>
                                                        {this.state.configList.floorCovering && this.state.configList.floorCovering.map(floorCovering => {
                                                            return (
                                                                <option>{floorCovering}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="جهت"
                                                            className="chosen-select-no-single" name="direction"
                                                            id="direction">
                                                        <option label="جهت"></option>
                                                        <option>شمالی</option>
                                                        <option>جنوبی</option>
                                                        <option>شرقی</option>
                                                        <option>غربی</option>


                                                    </select>
                                                </div>


                                            </div>

                                            <div className="checkboxes in-row">

                                                {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                    return (
                                                        <div className='col-md-2'>
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
                                                            <label htmlFor={equipment}>{equipment}</label>
                                                        </div>
                                                    )
                                                })}

                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div id='tab2' style={{display: "none"}} className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single"
                                                    name="titlePanel" id="titlePanel">
                                                <option label="وضعیت"></option>
                                                <option>فروش</option>
                                                <option>اجاره</option>
                                                <option>رهن</option>
                                                <option>مشارکت</option>
                                                <option>معاوضه</option>
                                                <option>خارجی</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="نوع" className="chosen-select-no-single"
                                                    name="kindPanel" id="kindPanel">
                                                <option label="نوع"></option>
                                                <option>آپارتمان</option>
                                                <option>ویلا</option>
                                                <option>مستغلات</option>
                                                <option>کلنگی</option>
                                                <option>دفتر کار</option>
                                                <option>زمین</option>
                                                <option>مغازه</option>
                                                <option>سوییت</option>

                                            </select>
                                        </div>

                                        <div className="col-md-2">
                                            <select data-placeholder="کد منطقه را وارد کنید" style={{color: '#888'}}
                                                    name="regionCode" id="regionCode"
                                                    onChange={this.onRegionCodeChange}>
                                                <option label="کد منطقه را وارد کنید" disabled selected></option>
                                                {regionCodeList && regionCodeList.map(regionCode => {
                                                    return (
                                                        <option>{regionCode}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="main-search-input">
                                                <select data-placeholder="نام منطقه را وارد کنید"
                                                        name="regionName" style={{color: '#888'}}
                                                        id="regionName">
                                                    <option label="نام منطقه را وارد کنید" disabled selected></option>
                                                    {this.state.regionNameList && this.state.regionNameList.map(regionName => {
                                                        return (
                                                            <option>{regionName}</option>
                                                        )
                                                    })}

                                                </select>

                                                <button className="button" onClick={this.searchFile}>جست و جو</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label>مساحت</label>
                                                <div id="area-range-panel" data-min="0" data-max="999999"
                                                     data-unit="مترمربع"
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
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>


                                                <div className="col-md-3">
                                                    <select data-placeholder="آشپزخانه" className="chosen-select-no-single"
                                                            name="unitKitchen" id="unitKitchen">
                                                        <option label="آشپزخانه"></option>
                                                        {this.state.configList.kitchenService && this.state.configList.kitchenService.map(kitchenService => {
                                                            return (
                                                                <option>{kitchenService}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="نما" className="chosen-select-no-single"
                                                            name="frontKind" id="frontKind">
                                                        <option label="نما"></option>
                                                        {this.state.configList.frontKind && this.state.configList.frontKind.map(frontKind => {
                                                            return (
                                                                <option>{frontKind}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="تعداد واحد در هر طبقه"
                                                            className="chosen-select-no-single" name="numberHousePanel"
                                                            id="numberHousePanel">
                                                        <option label="تعداد واحد در هر طبقه"></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>6</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="سند"
                                                            className="chosen-select-no-single" name="documentKind"
                                                            id="documentKind">
                                                        <option label="سند"></option>
                                                        {this.state.configList.documentKind && this.state.configList.documentKind.map(documentKind => {
                                                            return (
                                                                <option>{documentKind}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="کف" className="chosen-select-no-single"
                                                            name="floorCovering" id="floorCovering">
                                                        <option label="کف پوش"></option>
                                                        {this.state.configList.floorCovering && this.state.configList.floorCovering.map(floorCovering => {
                                                            return (
                                                                <option>{floorCovering}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="جهت"
                                                            className="chosen-select-no-single" name="direction"
                                                            id="direction">
                                                        <option label="جهت"></option>
                                                        <option>شمالی</option>
                                                        <option>جنوبی</option>
                                                        <option>شرقی</option>
                                                        <option>غربی</option>


                                                    </select>
                                                </div>


                                            </div>

                                            <div className="checkboxes in-row">

                                                {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                    return (
                                                        <div className='col-md-2'>
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
                                                            <label htmlFor={equipment}>{equipment}</label>
                                                        </div>
                                                    )
                                                })}

                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div id='tab3' style={{display: "none"}} className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="وضعیت" className="chosen-select-no-single"
                                                    name="titlePanel" id="titlePanel">
                                                <option label="وضعیت"></option>
                                                <option>فروش</option>
                                                <option>اجاره</option>
                                                <option>رهن</option>
                                                <option>مشارکت</option>
                                                <option>معاوضه</option>
                                                <option>خارجی</option>
                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="نوع" className="chosen-select-no-single"
                                                    name="kindPanel" id="kindPanel">
                                                <option label="نوع"></option>
                                                <option>آپارتمان</option>
                                                <option>ویلا</option>
                                                <option>مستغلات</option>
                                                <option>کلنگی</option>
                                                <option>دفتر کار</option>
                                                <option>زمین</option>
                                                <option>مغازه</option>
                                                <option>سوییت</option>

                                            </select>
                                        </div>

                                        <div className="col-md-2">
                                            <select data-placeholder="کد منطقه را وارد کنید" style={{color: '#888'}}
                                                    name="regionCode" id="regionCode"
                                                    onChange={this.onRegionCodeChange}>
                                                <option label="کد منطقه را وارد کنید" disabled selected></option>
                                                {regionCodeList && regionCodeList.map(regionCode => {
                                                    return (
                                                        <option>{regionCode}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="main-search-input">
                                                <select data-placeholder="نام منطقه را وارد کنید"
                                                        name="regionName" style={{color: '#888'}}
                                                        id="regionName">
                                                    <option label="نام منطقه را وارد کنید" disabled selected></option>
                                                    {this.state.regionNameList && this.state.regionNameList.map(regionName => {
                                                        return (
                                                            <option>{regionName}</option>
                                                        )
                                                    })}

                                                </select>

                                                <button className="button" onClick={this.searchFile}>جست و جو</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <label>مساحت</label>
                                                <div id="area-range-panel" data-min="0" data-max="999999"
                                                     data-unit="مترمربع"
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
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>


                                                <div className="col-md-3">
                                                    <select data-placeholder="آشپزخانه" className="chosen-select-no-single"
                                                            name="unitKitchen" id="unitKitchen">
                                                        <option label="آشپزخانه"></option>
                                                        {this.state.configList.kitchenService && this.state.configList.kitchenService.map(kitchenService => {
                                                            return (
                                                                <option>{kitchenService}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="نما" className="chosen-select-no-single"
                                                            name="frontKind" id="frontKind">
                                                        <option label="نما"></option>
                                                        {this.state.configList.frontKind && this.state.configList.frontKind.map(frontKind => {
                                                            return (
                                                                <option>{frontKind}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="تعداد واحد در هر طبقه"
                                                            className="chosen-select-no-single" name="numberHousePanel"
                                                            id="numberHousePanel">
                                                        <option label="تعداد واحد در هر طبقه"></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>6</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="سند"
                                                            className="chosen-select-no-single" name="documentKind"
                                                            id="documentKind">
                                                        <option label="سند"></option>
                                                        {this.state.configList.documentKind && this.state.configList.documentKind.map(documentKind => {
                                                            return (
                                                                <option>{documentKind}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="کف" className="chosen-select-no-single"
                                                            name="floorCovering" id="floorCovering">
                                                        <option label="کف پوش"></option>
                                                        {this.state.configList.floorCovering && this.state.configList.floorCovering.map(floorCovering => {
                                                            return (
                                                                <option>{floorCovering}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="جهت"
                                                            className="chosen-select-no-single" name="direction"
                                                            id="direction">
                                                        <option label="جهت"></option>
                                                        <option>شمالی</option>
                                                        <option>جنوبی</option>
                                                        <option>شرقی</option>
                                                        <option>غربی</option>


                                                    </select>
                                                </div>


                                            </div>

                                            <div className="checkboxes in-row">

                                                {this.state.configList.equipments && this.state.configList.equipments.map(equipment => {
                                                    return (
                                                        <div className='col-md-2'>
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
                                                            <label htmlFor={equipment}>{equipment}</label>
                                                        </div>
                                                    )
                                                })}

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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>خرید
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

const mapStateToProps = state => {
    const user = state.user;
    const fileRequestObject = state.fileRequestObject;
    return {user, fileRequestObject};
};

export default connect(mapStateToProps, {setUser, setState, setFileSearchRequest})(withTranslation()(realstatePanel));
