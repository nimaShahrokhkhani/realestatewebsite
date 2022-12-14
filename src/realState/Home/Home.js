import React from 'react';
import './Home.css';
import '../css/style.css';
import '../css/color.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import _ from "underscore";
import Slider from "react-slick/lib";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as StringUtils from "../../utils/StringUtils";


const AnyReactComponent = ({text}) => <div>{text}</div>;

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
        this.finalEquipmentListMortgage = [];
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
            element.src = "../scripts/mmenu.min.js";
            element.type = "text/javascript";
            root.appendChild(element);

            var element = document.createElement("script");
            element.src = "../scripts/custom.js";
            element.type = "text/javascript";
            root.appendChild(element);
        })
    }

    searchSale = () => {
        let requestData = {
            // address: _.compact([
            //     !_.isEmpty(document.querySelector('#addressTab1').value) ? document.querySelector('#addressTab1').value : undefined,
            // ]),
            city: document.getElementById('addressTab1').value !== '' ? document.getElementById('addressTab1').value : undefined,
            sale: _.compact([
                '??????????'
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
            // address: _.compact([
            //     !_.isEmpty(document.querySelector('#addressTab2').value) ? document.querySelector('#addressTab2').value : undefined,
            // ]),
            city: document.getElementById('addressTab2').value !== '' ? document.getElementById('addressTab2').value : undefined,
            sale: _.compact([
                '?????????? ????'
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

    searchMortgage = () => {
        let requestData = {
            // address: _.compact([
            //     !_.isEmpty(document.querySelector('#addressTab3').value) ? document.querySelector('#addressTab3').value : undefined,
            // ]),
            city: document.getElementById('addressTab3').value !== '' ? document.getElementById('addressTab3').value : undefined,
            sale: _.compact([
                '?????????? ????'
            ]),
            type: document.getElementById('typeTab3').value !== '' ? document.getElementById('typeTab3').value : undefined,
            room: document.getElementById('roomNumberTab3').value !== '' ? document.getElementById('roomNumberTab3').value : undefined,
            unitWC: document.getElementById('wcTab3').value !== '' ? document.getElementById('wcTab3').value : undefined,
            fromMortgage: document.getElementById('minMortgageTab3').value !== '' ? this.convertAmount(document.getElementById('minMortgageTab3').value) : undefined,
            toMortgage: document.getElementById('maxMortgageTab3').value !== '' ? this.convertAmount(document.getElementById('maxMortgageTab3').value) : undefined,
            fromArea: document.getElementById('areaMinTab3').value !== '' ? parseInt(document.getElementById('areaMinTab3').value) : undefined,
            toArea: document.getElementById('areaMaxTab3').value !== '' ? parseInt(document.getElementById('areaMaxTab3').value) : undefined,
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
        return saleType === '??????????' || saleType === '????????????' || saleType === '????????????'
    }

    convertAmount(amount) {
        if (amount.includes('????????')) {
            return parseInt(amount.match(/\d+/g)[0]) * 1000;
        } else if (amount.includes('????????????')) {
            return parseInt(amount.match(/\d+/g)[0]) * 1000000;
        } else if (amount.includes('??????????????')) {
            return parseInt(amount.match(/\d+/g)[0]) * 1000000000;
        }
    }

    renderAmount(advertise) {
        if (this.isSale(advertise.sale)) {
            return (
                <span className="listing-compact-title"><i>{advertise.totalPrice ? StringUtils.commify(advertise.totalPrice) : ''} ??????????</i></span>
            )
        } else {
            return (
                <span
                    className="listing-compact-title"><i>{advertise.mortgage ? (advertise.mortgage ? StringUtils.commify(advertise.mortgage) : '') : (advertise.rent ? StringUtils.commify(advertise.rent) : '')} ??????????</i></span>
            )
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.state.latestAdvertiseList ? ( this.state.latestAdvertiseList.length > 3 ? 3 : this.state.latestAdvertiseList.length ) : 0,
            slidesToScroll: 3,
            arrows: false,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
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
                                        <h2>?????????? ???????? ?????????????? ?????????? ??????????</h2>
                                        <form className="main-search-form">
                                            <div className="search-type">
                                                <label id='titleTable1' className="active"><input
                                                    className="first-tab"
                                                    name="tab[]"
                                                    onClick={() => this.onTabClick('tab1')}
                                                    type="radio"/>????????</label>
                                                <label id='titleTable2'>
                                                    <input name="tab[]"
                                                           onClick={() => this.onTabClick('tab2')}
                                                           type="radio"/>??????????</label>
                                                <label id='titleTable3'>
                                                    <input name="tab[]"
                                                           onClick={() => this.onTabClick('tab3')}
                                                           type="radio"/>??????</label>
                                            </div>
                                            <div id="tab1" className="main-search-box">
                                                <div className="main-search-input larger-input">

                                                    <select data-placeholder="?????? ???? ???????? ????????."
                                                            className="chosen-select-no-single"
                                                            id="addressTab1">
                                                        <option value="" disabled selected hidden>?????? ???? ???????? ????????.</option>
                                                        <option>??????</option>
                                                        <option>???????? ??????????</option>
                                                        <option>????????</option>
                                                        <option>????????</option>
                                                        <option>?????????? ??????</option>
                                                        <option>????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????????</option>
                                                        <option>????????????</option>
                                                        <option>???????????? ????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                    </select>

                                                    <button onClick={this.searchSale} className="button">?????? ?? ????
                                                    </button>
                                                </div>
                                                <div className="row with-forms">
                                                    <div className="col-md-4">
                                                        <select data-placeholder="??????"
                                                                className="chosen-select-no-single"
                                                                id="typeTab1">
                                                            <option value="" disabled selected hidden>??????</option>
                                                            <option>????????????????</option>
                                                            <option>????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>???????? ??????????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>??????????????</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="?????????? ????????"
                                                                   data-unit="??????????"
                                                                   id="minTotalPriceTab1"/>
                                                            <select>
                                                                <option></option>
                                                                <option>200 ????????????</option>
                                                                <option>300 ????????????</option>
                                                                <option>500 ????????????</option>
                                                                <option>750 ????????????</option>
                                                                <option>1 ??????????????</option>
                                                                <option>2 ??????????????</option>
                                                                <option>3 ??????????????</option>
                                                                <option>4 ??????????????</option>
                                                                <option>8 ??????????????</option>
                                                                <option>10 ??????????????</option>
                                                                <option>15 ??????????????</option>
                                                                <option>30 ??????????????</option>
                                                                <option>50 ??????????????</option>

                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="???????????? ????????"
                                                                   data-unit="??????????"
                                                                   id="maxTotalPriceTab1"/>
                                                            <select>
                                                                <option></option>
                                                                <option> 1 ??????????????</option>
                                                                <option> 1.5 ??????????????</option>
                                                                <option> 2 ??????????????</option>
                                                                <option> 3 ??????????????</option>
                                                                <option> 5 ??????????????</option>
                                                                <option> 10 ??????????????</option>
                                                                <option>20 ??????????????</option>
                                                                <option>30 ??????????????</option>
                                                                <option>40 ??????????????</option>
                                                                <option>50 ??????????????</option>
                                                                <option>60 ??????????????</option>
                                                                <option> 80 ??????????????</option>
                                                                <option>100 ??????????????</option>
                                                                <option> 120 ??????????????</option>


                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <a href="#" className="more-search-options-trigger"
                                                   data-open-title="?????????? ?????? ??????????"
                                                   data-close-title="????????"></a>

                                                <div className="more-search-options">
                                                    <div className="more-search-options-container">
                                                        <div className="row with-forms">
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="?????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMinTab1"/>
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
                                                                    <input type="text" placeholder="???????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMaxTab1"/>
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
                                                                <select data-placeholder="?????????? ???????? ????"
                                                                        className="chosen-select-no-single"
                                                                        id="roomNumberTab1">
                                                                    <option value="" disabled selected hidden>?????????? ???????? ????</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select data-placeholder="?????????? ????????/??????????????" id='wcTab1'
                                                                        className="chosen-select-no-single">
                                                                    <option value="" disabled selected hidden>?????????? ????????/??????????????</option>
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
                                                                    <div key={equipment} style={{width: '33%'}}>
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
                                                                            style={{fontSize: '2.25vh'}} htmlFor={equipment}>{equipment}</label>
                                                                    </div>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab2" style={{display: "none"}} className="main-search-box">
                                                <div className="main-search-input larger-input">
                                                    <select data-placeholder="?????? ???? ???????? ????????."
                                                            className="chosen-select-no-single"
                                                            id="addressTab2">
                                                        <option value="" disabled selected hidden>?????? ???? ???????? ????????.</option>
                                                        <option>??????</option>
                                                        <option>???????? ??????????</option>
                                                        <option>????????</option>
                                                        <option>????????</option>
                                                        <option>?????????? ??????</option>
                                                        <option>????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????????</option>
                                                        <option>????????????</option>
                                                        <option>???????????? ????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                    </select>
                                                    <button onClick={this.searchRent} className="button">?????? ?? ????
                                                    </button>
                                                </div>
                                                <div className="row with-forms">
                                                    <div className="col-md-4">
                                                        <select data-placeholder="??????"
                                                                className="chosen-select-no-single"
                                                                id="typeTab2">
                                                            <option value="" disabled selected hidden>??????</option>
                                                            <option>????????????????</option>
                                                            <option>????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>???????? ??????????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>??????????????</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="?????????? ???????? ??????"
                                                                   data-unit="??????????"
                                                                   id="minMortgageTab2"/>
                                                            <select>
                                                                <option></option>
                                                                <option>10 ????????????</option>
                                                                <option>20 ????????????</option>
                                                                <option>30 ????????????</option>
                                                                <option>40 ????????????</option>
                                                                <option> 50 ????????????</option>
                                                                <option>100 ????????????</option>
                                                                <option>150 ????????????</option>
                                                                <option>250 ????????????</option>
                                                                <option>350 ????????????</option>
                                                                <option>500 ????????????</option>
                                                                <option>750 ????????????</option>
                                                                <option>1 ??????????????</option>
                                                                <option>1.2 ??????????????</option>
                                                                <option>1.5 ??????????????</option>
                                                                <option>2 ??????????????</option>
                                                                <option>3 ??????????????</option>
                                                                <option>5 ??????????????</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="???????????? ???????? ??????"
                                                                   data-unit="??????????"
                                                                   id="maxMortgageTab2"/>
                                                            <select>
                                                                <option>10 ????????????</option>
                                                                <option>20 ????????????</option>
                                                                <option>30 ????????????</option>
                                                                <option>40 ????????????</option>
                                                                <option> 50 ????????????</option>
                                                                <option>100 ????????????</option>
                                                                <option>150 ????????????</option>
                                                                <option>250 ????????????</option>
                                                                <option>350 ????????????</option>
                                                                <option>500 ????????????</option>
                                                                <option>750 ????????????</option>
                                                                <option>1 ??????????????</option>
                                                                <option>1.2 ??????????????</option>
                                                                <option>1.5 ??????????????</option>
                                                                <option>2 ??????????????</option>
                                                                <option>3 ??????????????</option>
                                                                <option>5 ??????????????</option>
                                                                <option>8 ??????????????</option>
                                                                <option>10 ??????????????</option>
                                                                <option>15 ??????????????</option>
                                                                <option>20 ??????????????</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="?????????? ???????? ??????????"
                                                                   data-unit="??????????"
                                                                   id="minRentTab2"/>
                                                            <select>
                                                                <option></option>
                                                                <option>100 ????????</option>
                                                                <option>500 ????????</option>
                                                                <option>1 ????????????</option>
                                                                <option>1.5 ????????????</option>
                                                                <option>2 ????????????</option>
                                                                <option>5 ????????????</option>
                                                                <option>10 ????????????</option>
                                                                <option>20 ????????????</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="???????????? ???????? ??????????"
                                                                   data-unit="??????????"
                                                                   id="maxRentTab2"/>
                                                            <select>
                                                                <option>500 ????????</option>
                                                                <option>1 ????????????</option>
                                                                <option>2 ????????????</option>
                                                                <option>4 ????????????</option>
                                                                <option>8 ????????????</option>
                                                                <option>10 ????????????</option>
                                                                <option>15 ????????????</option>
                                                                <option>20 ????????????</option>
                                                                <option>30 ????????????</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="more-search-options-trigger"
                                                   data-open-title="?????????? ?????? ??????????"
                                                   data-close-title="????????"></a>

                                                <div className="more-search-options">
                                                    <div className="more-search-options-container">
                                                        <div className="row with-forms">
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="?????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMinTab2"/>
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
                                                                        <option>360 ??????</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="???????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMaxTab2"/>
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
                                                                <select data-placeholder="?????????? ???????? ????"
                                                                        className="chosen-select-no-single"
                                                                        id="roomNumberTab2">
                                                                    <option value="" disabled selected hidden>?????????? ???????? ????</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select data-placeholder="?????????? ????????/??????????????"
                                                                        className="chosen-select-no-single"
                                                                        id="wcTab2">
                                                                    <option value="" disabled selected hidden>?????????? ????????/??????????????</option>
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
                                                                    <div key={equipment} style={{width: '33%'}}>
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
                                                                            style={{fontSize: '2.25vh'}} htmlFor={equipment}>{equipment}</label>
                                                                    </div>
                                                                )
                                                            })}

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="tab3" style={{display: "none"}} className="main-search-box">
                                                <div className="main-search-input larger-input">
                                                    <select data-placeholder="?????? ???? ???????? ????????."
                                                            className="chosen-select-no-single"
                                                            id="addressTab3">
                                                        <option value="" disabled selected hidden>?????? ???? ???????? ????????.</option>
                                                        <option>??????</option>
                                                        <option>???????? ??????????</option>
                                                        <option>????????</option>
                                                        <option>????????</option>
                                                        <option>?????????? ??????</option>
                                                        <option>????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????????</option>
                                                        <option>????????????</option>
                                                        <option>???????????? ????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                        <option>????????????</option>
                                                        <option>??????????</option>
                                                        <option>????????????</option>
                                                    </select>
                                                    <button onClick={this.searchMortgage} className="button">?????? ?? ????
                                                    </button>
                                                </div>
                                                <div className="row with-forms">
                                                    <div className="col-md-4">
                                                        <select data-placeholder="??????"
                                                                className="chosen-select-no-single"
                                                                id="typeTab3">
                                                            <option value="" disabled selected hidden>??????</option>
                                                            <option>????????????????</option>
                                                            <option>????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>???????? ??????????????</option>
                                                            <option>??????????</option>
                                                            <option>????????</option>
                                                            <option>??????????????</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="?????????? ???????? ??????"
                                                                   data-unit="??????????"
                                                                   id="minMortgageTab3"/>
                                                            <select>
                                                                <option></option>
                                                                <option>10 ????????????</option>
                                                                <option>20 ????????????</option>
                                                                <option>30 ????????????</option>
                                                                <option>40 ????????????</option>
                                                                <option> 50 ????????????</option>
                                                                <option>100 ????????????</option>
                                                                <option>150 ????????????</option>
                                                                <option>250 ????????????</option>
                                                                <option>350 ????????????</option>
                                                                <option>500 ????????????</option>
                                                                <option>750 ????????????</option>
                                                                <option>1 ??????????????</option>
                                                                <option>1.2 ??????????????</option>
                                                                <option>1.5 ??????????????</option>
                                                                <option>2 ??????????????</option>
                                                                <option>3 ??????????????</option>
                                                                <option>5 ??????????????</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="select-input disabled-first-option">
                                                            <input type="text" placeholder="???????????? ???????? ??????"
                                                                   data-unit="??????????"
                                                                   id="maxMortgageTab3"/>
                                                            <select>
                                                                <option>10 ????????????</option>
                                                                <option>20 ????????????</option>
                                                                <option>30 ????????????</option>
                                                                <option>40 ????????????</option>
                                                                <option> 50 ????????????</option>
                                                                <option>100 ????????????</option>
                                                                <option>150 ????????????</option>
                                                                <option>250 ????????????</option>
                                                                <option>350 ????????????</option>
                                                                <option>500 ????????????</option>
                                                                <option>750 ????????????</option>
                                                                <option>1 ??????????????</option>
                                                                <option>1.2 ??????????????</option>
                                                                <option>1.5 ??????????????</option>
                                                                <option>2 ??????????????</option>
                                                                <option>3 ??????????????</option>
                                                                <option>5 ??????????????</option>
                                                                <option>8 ??????????????</option>
                                                                <option>10 ??????????????</option>
                                                                <option>15 ??????????????</option>
                                                                <option>20 ??????????????</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="more-search-options-trigger"
                                                   data-open-title="?????????? ?????? ??????????"
                                                   data-close-title="????????"></a>

                                                <div className="more-search-options">
                                                    <div className="more-search-options-container">
                                                        <div className="row with-forms">
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="?????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMinTab3"/>
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
                                                                        <option>360 ??????</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="select-input disabled-first-option">
                                                                    <input type="text" placeholder="???????????? ??????????"
                                                                           data-unit="?????? ????????" id="areaMaxTab3"/>
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
                                                                <select data-placeholder="?????????? ???????? ????"
                                                                        className="chosen-select-no-single"
                                                                        id="roomNumberTab3">
                                                                    <option value="" disabled selected hidden>?????????? ???????? ????</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <select data-placeholder="?????????? ????????/??????????????"
                                                                        className="chosen-select-no-single"
                                                                        id="wcTab3">
                                                                    <option value="" disabled selected hidden>?????????? ????????/??????????????</option>
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
                                                                    <div key={equipment} style={{width: '33%'}}>
                                                                        <input id={equipment} type="checkbox"
                                                                               name="check"
                                                                               onChange={(e) => {
                                                                                   if (e.target.checked) {
                                                                                       !this.finalEquipmentListMortgage.includes(e.target.id) && this.finalEquipmentListMortgage.push(e.target.id)
                                                                                   } else {
                                                                                       if (this.finalEquipmentListMortgage.includes(e.target.id)) {
                                                                                           this.finalEquipmentListMortgage = this.finalEquipmentListMortgage.filter(equipment => equipment !== e.target.id)
                                                                                       }
                                                                                   }
                                                                               }}/>
                                                                        <label
                                                                            style={{fontSize: '2.25vh'}} htmlFor={equipment}>{equipment}</label>
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
                            <h3 className="headline margin-bottom-25 margin-top-65">???????? ????</h3>
                        </div>
                        <div className="col-md-12">



                            <Slider {...settings}>
                                {this.state.latestAdvertiseList && this.state.latestAdvertiseList.map(advertise => {
                                    return (
                                        <a key={advertise.advertisingCode} onClick={() => {
                                            this.advertiseDetail(advertise);
                                        }} className="carousel-item">
                                            <div className="listing-item">

                                                <div className="listing-img-container">

                                                    <div className="listing-badges">
                                                        <span className="featured">????????</span>
                                                        <span>{advertise.sale}</span>
                                                    </div>

                                                    <div className="listing-img-content">
                                                        {this.renderAmount(advertise)}

                                                    </div>

                                                    <div className="listing-carousel">
                                                        {advertise.images && advertise.images.map(image => {
                                                            return (
                                                                <div key={image.filename}><img
                                                                    src={Services.getAdvertiseImageDownloadUrl(image.filename)}
                                                                    alt=""/></div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>

                                                <div className="listing-content">

                                                    <div className="listing-title">
                                                        <h4>
                                                            <div
                                                                href="single-property-page-1.html">{advertise.title}</div>
                                                        </h4>
                                                        <i className="fa fa-map-marker"></i>
                                                    </div>
                                                </div>

                                                <ul className="listing-features">
                                                    <li>?????????? <span>{advertise.area} ?????? ????????</span></li>
                                                    <li>???????? <span>{advertise.unitRoom}</span></li>
                                                    <li>?????? <span>{advertise.city}</span></li>
                                                </ul>

                                                <div className="listing-footer">
                                                </div>

                                            </div>

                                        </a>
                                    )
                                })}
                            </Slider>

                        </div>

                    </div>


                </div>

                <section className="fullwidth margin-top-105" data-background-color="#f7f7f7">

                    <h3 className="headline-box">?????????? ?????? ?????????? ?????????? ????????</h3>
                    <div className="introduction-software">
                        <img src={require("../image/software.jpg")} alt=""/>

                    </div>

                </section>

                <section className="fullwidth margin-top-95">

                    <h3 className="headline-box">???????????? ?? ???????? ????</h3>

                    <div className="container">
                        <div className="row">

                            {this.state.blogList && this.state.blogList.map(blog => {
                                return (
                                    <div key={blog.title} className="col-md-4">
                                        <div className="blog-post">
                                            <a className="post-img">
                                                <img src={blog.contentImage} alt=""/>
                                            </a>
                                            <div className="post-content">
                                                <h3><a href="#">{blog.title}1</a></h3>


                                                <a onClick={() => {
                                                    this.onBlogClick(blog)
                                                }} className="read-more">?????????? <i
                                                    className="fa fa-angle-left"></i></a>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>


                <section className="fullwidth margin-top-95 margin-bottom-0">

                    <h3 className="headline-box">???????????? ?????????? ???????? </h3>
                    <div className={'row'} style={{
                        width: '100%',
                        paddingLeft: 30,
                        marginRight: 0,
                        marginLeft: 0,
                    }}>
                        <div className={'col-md-7'} style={{fontSize: 18, marginLeft: 20, marginTop: 25, paddingRight: 60, textAlign: 'justify', textJustify: 'inter-word', color: 'black'}}>
                            ?????????? ???????? ???? ???????? ???????? ???????? ?? ?????????????? ???????? ???? ???????????????? ?????? ?????? ?????????? ?? ???????? ???????? ???? ?????????? ???????? ?????????????? ???? ?????? ???????????????? ?????????? ?? ???????????????? ???? ?????????? ?????????? ???????? ???? ???????????? ?????????? ?? ???????????? ?????? ?????????? ?????????? ?????????? ?????????? ???? ???????????????? ?????????? ?? ???????????? ?????????????? ???? ???????? ?????????? ???????????? ??
                            ???????????? ?????????????? ?????????? ???????? ???? ?????? ?????? ??????:
                            <br/>
                            ???	???????????? ???????? ???? ?????????????? ?????????? ???????? ?? ?????????? (??????????/??????????????????)
                            <br/>
                            ???	?????????? ?????? ???? ???????? ???????? ???? ???? ?????? ???? ???????? ???????? ?????? ???? ?????????? ????????????
                            <br/>
                            ???	???????????? ?????????????? ???????? ???????? ?????? ???????????? ?????????? ???????????? ??????
                            <br/>
                            ???	?????????????? ???? ?????????? ?????? ?? ?????????? ?????? ?????????? ??  ??????????
                            <br/>
                            ???	???????? ?????????? ?????????? ???????????? ?? ?????????? ?????????? ?? ???????? ????????
                            <br/>
                            ???	?????? ???????? ???????? ?????????? ???????????? ?? ???????????????? ?? ??????????????
                            <br/>
                            ???	?????? ???????????? ???? ?????????????? ?????? ?????????????? ?????????? ?????????? ?????? ?????????? ????????
                            <br/>
                            ???	???????????? ???????????? ???????????? ?? ???????????????? ?????????? ???? ?????????? ??????????????
                            <br/>
                            ???	?????????? ?? ?????????? ???????? ?????????? ?????????? ?????????? ?? ???????????? ??????
                            <br/>
                            ???	???????? ?????????? ?? ???????? ???????? ?? ???????? ?????????????? ???????? ?????????????? ??????????

                            <br/>
                            <br/>
                            " ?????????? ???????? " ???? ?????????? ???????? ?????????? ???????? ???? ???????????? ?? ?????????????? ??????????

                        </div>
                        <div className={'col-md-4'} style={{height: '50vh', marginRight: 30}}>
                            <MapContainer style={{
                                height: '60vh',
                                width: '100%'
                            }} center={[37.296929, 49.591424]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[37.296929, 49.591424]}>
                                    <Popup>
                                        ???????? ?????????? ????????
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <img src={require("../image/right-arrow.png")} alt={''}/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <img src={require("../image/left-arrow.png")} alt={''}/>
        </div>
    );
}

export default withTranslation()(Home);
