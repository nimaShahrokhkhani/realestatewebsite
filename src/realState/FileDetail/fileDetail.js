import React from 'react';
import '../css/style.css';
import '../css/color.css';
import './fileDetail.css'
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import _ from "underscore";
import ScriptTag from 'react-script-tag';
import * as StringUtils from "../../utils/StringUtils";
import connect from "react-redux/es/connect/connect";
import {setFileSearchRequest, setState, setUser} from "../../components/redux/actions";

class fileDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            isErrorPage: false
        };
        this.file = undefined;
    }

    getFile(fileId) {
        Services.getFileById({Id: fileId}).then(response => {
            this.file = response.data;
            this.showFile(response.data)
        }).catch(error => {
            this.setState({isErrorPage: true})
        })
    }

    onNextFileClick = () => {
        let requestObject = this.props.fileRequestObject ? this.props.fileRequestObject : {};
        requestObject.Number = this.file.Number;
        requestObject.agencyCode = this.props.user.agencyCode;
        Services.getNextFile(requestObject).then(response => {
            this.props.history.push({
                pathname: '/fileDetail',
                state: {
                    fileId: response.data.Id
                }
            });
        })
    };

    onPrevFileClick = () => {
        let requestObject = this.props.fileRequestObject ? this.props.fileRequestObject : {};
        requestObject.Number = this.file.Number;
        requestObject.agencyCode = this.props.user.agencyCode;
        Services.getPrevFile(requestObject).then(response => {
            this.props.history.push({
                pathname: '/fileDetail',
                state: {
                    fileId: response.data.Id
                }
            });
        })
    };

    showFile(file) {
        if (!_.isEmpty(file)) {

            var equipmentResultListDiv = document.getElementById("equipmentResultList");
            for (var i = 0; i < file.equipments.length; i++) {
                var equipmentResultDiv = document.createElement('DIV');
                equipmentResultDiv.className = 'equipmentResult';
                equipmentResultDiv.innerHTML = file.equipments[i];
                equipmentResultListDiv.appendChild(equipmentResultDiv);
            }

            document.querySelector('#username').value = file.username;
            document.querySelector('#number').value = file.Id;
            document.querySelector('#tel1').value = file.tel1;
            document.querySelector('#tel2').value = file.tel2;
            document.querySelector('#tel3').value = file.tel3;
            document.querySelector('#address').value = file.address;
            document.querySelector('#owner').value = file.owner;
            document.querySelector('#regionCode').value = file.regionCode;
            document.querySelector('#regionName').value = file.regionName;
            document.querySelector('#date').value = StringUtils.convertMillisecondToShamsi(file.date);
            document.querySelector('#updateDate').value = StringUtils.convertMillisecondToShamsi(file.updateDate);
            document.querySelector('#rentPrice').value = file.rent ? StringUtils.commify(file.rent) : '';
            document.querySelector('#sale').checked = file.sale === 'فروش';
            document.querySelector('#rent').checked = file.sale === 'اجاره';
            document.querySelector('#mortgage').checked = file.sale === 'رهن';
            document.querySelector('#partnership').checked = file.sale === 'مشارکت';
            document.querySelector('#exchange').checked = file.sale === 'معاوضه';
            document.querySelector('#mortgagePrice').value = file.mortgage ? StringUtils.commify(file.mortgage) : '';
            document.querySelector('#apartment').value = file.apartment;
            document.querySelector('#land').value = !_.isEmpty(file.land) ? file.land : '';
            document.querySelector('#vila').value = !_.isEmpty(file.vila) ? file.vila : '';
            document.querySelector('#mostaghelat').value = !_.isEmpty(file.building) ? file.building : '';
            document.querySelector('#home').checked = file.home;
            document.querySelector('#kolangi').value = !_.isEmpty(file.oldHouse) ? file.oldHouse : '';
            document.querySelector('#office').value = !_.isEmpty(file.office) ? file.office : '';
            document.querySelector('#store').checked = file.store;
            document.querySelector('#suite').checked = file.suite;
            document.querySelector('#north').checked = file.north;
            document.querySelector('#south').checked = file.south;
            document.querySelector('#east').checked = file.east;
            document.querySelector('#west').checked = file.west;
            document.querySelector('#tabaghat').value = file.floorNo;
            document.querySelector('#vahed').value = file.unitNo;
            document.querySelector('#totalVahed').value = file.totalUnit;
            document.querySelector('#unitComment').value = file.unitComment;
            document.querySelector('#totalPrice').value = file.totalPrice ? StringUtils.commify(file.totalPrice.toString()) : '';
            document.querySelector('#metri').value = file.unitPrice ? StringUtils.commify(file.unitPrice.toString()) : '';
            document.querySelector('#priceComment').value = file.priceComment;
            document.querySelector('#pool').value = file.pool;
            document.querySelector('#sona').value = file.sona;
            document.querySelector('#jakoozi').value = file.jakozi;
            document.querySelector('#area').value = file.area;
            document.querySelector('#density').value = file.density;
            document.querySelector('#toolBar').value = file.front;
            document.querySelector('#height').value = file.height;
            document.querySelector('#corrective').value = file.modify;
            document.querySelector('#yard').value = file.yard;
            document.querySelector('#backYard').value = file.smallYard;
            document.querySelector('#basement').value = file.underGround;
            document.querySelector('#employeeService').value = file.employeeService;
            document.querySelector('#patio').value = file.patio;
            document.querySelector('#residential').checked = file.residential;
            document.querySelector('#discharge').value = file.empty;
            document.querySelector('#rented').value = file.rented;
            document.querySelector('#ageBuilding').value = file.age;
            document.querySelector('#view').value = file.frontKind;
            document.querySelector('#InformationSource').value = file.source;
            document.querySelector('#ownerName').value = file.publisher;
            document.querySelector('#residenceOwner').value = file.ownerInHouse;
            document.querySelector('#documentState').value = file.documentKind;
            document.querySelector('#additionalDescription').value = file.comment;
            document.querySelector('#isHurry').checked = file.inHurry;
            document.querySelector('#ownerName').value = file.username;
            document.querySelector('#tableFloor0').value = file.unitFloor;
            document.querySelector('#tableZirBana0').value = file.unitBuiltUpArea;
            document.querySelector('#tableKhab0').value = file.unitRoom;
            document.querySelector('#tableBalcon0').checked = file.unitBalcony;
            document.querySelector('#tableTelephone0').value = file.unitTelephone;
            document.querySelector('#tableKitchen0').value = file.unitKitchen;
            document.querySelector('#tableWC0').value = file.unitWC;
            document.querySelector('#tableKafPoosh0').value = file.unitFloorCovering;
            document.querySelector('#tableOpen0').checked = file.unitOpen;
            document.querySelector('#tableMetri0').value = file.unitMetri ? StringUtils.commify(file.unitMetri.toString()) : '';
            document.querySelector('#tableTotalAmount0').value = file.unitTotalAmount ? StringUtils.commify(file.unitTotalAmount.toString()) : '';
            document.querySelector('#allParticipation').checked = file.participation === 'همه';
            document.querySelector('#privateParticipation').checked = file.participation === 'خصوصی';
            document.querySelector('#consultingCooperativeParticipation').checked = file.participation === 'تعاون مشاور';
        }
    }

    componentDidUpdate() {
        let {fileId} = this.props.location.state ? this.props.location.state : {};
        if (_.isEmpty(fileId)) {
            // this.setState({isErrorPage: true})
        } else {
            this.getFile(fileId);
        }
    }

    componentDidMount() {
        let {fileId} = this.props.location.state ? this.props.location.state : {};
        if (_.isEmpty(fileId)) {
            this.setState({isErrorPage: true})
        } else {
            this.getFile(fileId);
        }

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
            <div id="root-div" style={{marginTop: 50, marginBottom: 100, display: 'flex', justifyContent: 'center', direction: 'rtl'}}>


                <div className="clearfix"/>

                {this.state.isErrorPage ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{width: '50%', height: '50%'}} src={require('../image/404.jpeg')}/>
                    </div> :
                    <div className="container-center-horizontal" style={{direction: 'ltr'}}>
                        <div className="add-file screen">
                            <div className="flex-row">
                                <div className="jahat border-1px-dove-gray">
                                    <div className="flex-col-1">
                                        <input disabled type="checkbox" className="rectangle-69 border-1px-denim" id="east"
                                               tabIndex="11"/>
                                        <input disabled type="checkbox" className="rectangle-69-1 border-1px-denim" id="west"
                                               tabIndex="13"/>
                                    </div>
                                    <div className="flex-col-2">
                                        <div className="text iransans-light-black-13px" style={{marginTop: 10}}>شرقی</div>
                                        <div className="text-9 iransans-light-black-13px" style={{marginTop: -5}}>غربی</div>
                                    </div>
                                    <div className="flex-col-3">
                                        <input disabled type="checkbox" className="rectangle-69-2 border-1px-denim" id="north"
                                               tabIndex="10"/>
                                        <input disabled type="checkbox" className="rectangle-69-3 border-1px-denim" id="south"
                                               tabIndex="12"/>
                                    </div>
                                    <div className="flex-col-4">
                                        <div className="text-8 iransans-light-black-13px" style={{marginTop: 10}}>شمالی</div>
                                        <div className="text-1 iransans-light-black-13px">جنوبی</div>
                                    </div>
                                </div>
                                <div className="date border-1px-dove-gray">
                                    <div className="flex-row-1">
                                        <input disabled className="rectangle-8 border-1px-navy-blue date-picker" id="updateDate"
                                               tabIndex="7"/>
                                        <input disabled className="rectangle-9 border-1px-navy-blue date-picker" id='date'
                                               tabIndex="6"/>
                                        <div className="text-4 iransans-light-black-13px">: تاریخ</div>
                                    </div>
                                    <div className="flex-row-2">
                                        <input disabled className="rectangle-11 border-1px-navy-blue" id="regionName" tabIndex="9"/>
                                        <input disabled className="rectangle-10 border-1px-navy-blue" id="regionCode" tabIndex="8"
                                               onChange="onRegionCodeChange()"/>
                                        <div className="text-5 iransans-light-black-13px">: منطقه</div>
                                    </div>
                                </div>
                                <div className="overlap-group3">
                                    <div className="tel border-1px-dove-gray">
                                        <div className="flex-col">
                                            <div className="flex-row-3">
                                                <div className="rectangle-4 border-1px-navy-blue"></div>
                                                <div className="text-2-1 segoeui-regular-normal-black-13px">: مالک</div>
                                                <div className="rectangle-3 border-1px-navy-blue"></div>
                                                <div className="rectangle-3-1 border-1px-navy-blue"></div>
                                                <div className="overlap-group4 border-1px-navy-blue">
                                                </div>
                                            </div>
                                            <div className="rectangle-6 border-1px-navy-blue"></div>
                                        </div>
                                        <div className="flex-col-5">
                                            <div className="text-1-1 segoeui-regular-normal-black-13px">: تلفن</div>
                                            <div className="text-3 segoeui-regular-normal-black-13px">: آدرس</div>
                                        </div>
                                    </div>
                                    <div className="tel-1 border-1px-dove-gray">
                                        <div className="flex-col">
                                            <div className="flex-row-4">
                                                <input disabled className="rectangle-4-1 border-1px-navy-blue" id='owner'
                                                       tabIndex="4"/>
                                                <div className="text-11 iransans-light-black-13px">: مالک</div>
                                                <input disabled className="rectangle-3 border-1px-navy-blue"
                                                       onfocusout="onTelephoneInputFocusOut('tel3')" id="tel3"
                                                       tabIndex="3"/>
                                                <input disabled className="rectangle-3-1 border-1px-navy-blue"
                                                       onfocusout="onTelephoneInputFocusOut('tel2')" id="tel2"
                                                       tabIndex="2"/>
                                                <input disabled className="rectangle-3-1 border-1px-navy-blue"
                                                       onfocusout="onTelephoneInputFocusOut('tel1')" id="tel1"
                                                       tabIndex="1"/>
                                            </div>
                                            <input disabled className="rectangle-6-1 border-1px-navy-blue" id="address" tabIndex="5"/>
                                        </div>
                                        <div className="flex-col-6">
                                            <div className="text-10 iransans-light-black-13px">: تلفن</div>
                                            <div className="text-1 iransans-light-black-13px">: آدرس</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overlap-group1">
                                <div className="kind">
                                    <div className="overlap-group4-1 border-1px-dove-gray">
                                        <div className="rectangle-13"></div>
                                        <div className="kind-1">
                                            <div className="text-13 iransans-light-red-13px">خارجی</div>
                                            <div className="text-14 iransans-light-red-13px">معاوضه</div>
                                            <div className="text-15 iransans-light-red-13px">مشارکت</div>
                                            <div className="text-16 iransans-light-red-13px">رهن</div>
                                            <div className="text-17 iransans-light-red-13px">اجاره</div>
                                            <div className="text-18 iransans-light-red-13px">فروش</div>
                                        </div>
                                        <div className="text-19 iransans-light-chocolate-13px">سوئیت</div>
                                        <div className="text-20 iransans-light-chocolate-13px">مغازه</div>
                                        <div className="text-21 iransans-light-chocolate-13px">دفترکار</div>
                                        <div className="text-22 iransans-light-chocolate-13px">زمین</div>
                                        <div className="text-23 iransans-light-chocolate-13px">کلنگی</div>
                                        <div className="text-24 iransans-light-chocolate-13px">مستغلات</div>
                                        <div className="text-25 iransans-light-chocolate-13px">ویلا</div>
                                        <div className="text-26 iransans-light-chocolate-13px">آپارتمان</div>
                                        <input disabled className="rectangle-14 border-1px-navy-blue" id="office" tabIndex="25"/>
                                        <input disabled className="rectangle-14-1 border-1px-navy-blue" id="kolangi" tabIndex="23"/>
                                        <input disabled className="rectangle-14-2 border-1px-navy-blue" id="mostaghelat"
                                               tabIndex="22"/>
                                        <input disabled className="rectangle-14-3 border-1px-navy-blue" id="vila" tabIndex="21"/>
                                        <input disabled className="rectangle-14-4 border-1px-navy-blue" id="apartment"
                                               tabIndex="20"/>
                                        <input disabled className="rectangle-15 border-1px-navy-blue" id="land" tabIndex="24"/>
                                        <input disabled type="checkbox" className="ch-soeit border-1px-denim" id="suite"
                                               tabIndex="27"/>
                                        <input disabled type="checkbox" className="ch-maghazeh border-1px-denim" id="store"
                                               tabIndex="26"/>
                                    </div>
                                </div>
                                <div className="parking-anbari">
                                    <input disabled type="checkbox" className="ch-khareji border-1px-denim" id="home" tabIndex="19"
                                           name="saleType[]" onClick="saleTypeClickEvent('خارجی')"/>
                                    <input disabled type="checkbox" className="ch-moavezeh border-1px-denim" id="exchange"
                                           tabIndex="18" name="saleType[]" onClick="saleTypeClickEvent('معاوضه')"/>
                                    <input disabled type="checkbox" className="ch-mosharekat border-1px-denim"
                                           id="partnership" tabIndex="17" name="saleType[]"
                                           onClick="saleTypeClickEvent('مشارکت')"/>
                                    <input disabled type="checkbox" className="ch-rahn border-1px-denim" id="mortgage"
                                           tabIndex="16" name="saleType[]" onClick="saleTypeClickEvent('رهن')"/>
                                    <input disabled type="checkbox" className="parking-anbari-item border-1px-denim"
                                           id="rent" tabIndex="15" name="saleType[]"
                                           onClick="saleTypeClickEvent('اجاره')"/>
                                    <input disabled type="checkbox"
                                           className="parking-anbari-item border-1px-denim" id="sale"
                                           tabIndex="14" name="saleType[]"
                                           onClick="saleTypeClickEvent('فروش')"/>
                                </div>
                            </div>
                            <div className="overlap-group-1">
                                <div className="price border-1px-dove-gray">
                                    <input disabled className="rectangle-18 border-1px-navy-blue" id="unitComment" tabIndex="33"
                                           style={{display: "none"}}/>
                                    <input disabled className="rectangle-18 border-1px-navy-blue" id="priceComment" tabIndex="33"/>
                                    <div className="text-27 iransans-light-black-13px">: توضیح قیمت</div>
                                    <input disabled className="rectangle-18-1 border-1px-navy-blue" id='rentPrice' tabIndex="32"
                                           style={{display: "none"}}/>
                                    <input disabled className="rectangle-18-1 border-1px-navy-blue" id='metri' tabIndex="32"/>
                                    <div className="text-28 iransans-light-black-13px" id='rentPriceLabel'
                                         style={{display: "none"}}>: اجاره
                                    </div>
                                    <div className="text-28 iransans-light-black-13px" id='metriLabel'>: قیمت متری
                                    </div>
                                    <input disabled className="rectangle-18-2 border-1px-navy-blue" id="mortgagePrice"
                                           tabIndex="31"
                                           style={{display: "none"}}/>
                                    <input disabled className="rectangle-18-2 border-1px-navy-blue" id="totalPrice"
                                           tabIndex="31"/>
                                    <div className="text-29 iransans-light-black-13px"
                                         id='mortgagePriceLabel' style={{display: "none"}}>: ودیعه
                                    </div>
                                    <div className="text-29 iransans-light-black-13px"
                                         id='totalPriceLabel'>: قیمت کل
                                    </div>
                                    <input disabled className="rectangle-18-3 border-1px-navy-blue" id="totalVahed"
                                           tabIndex="30" onFocus="onTotalVahedFocus(this)"/>
                                    <input disabled className="rectangle-19 border-1px-navy-blue" id="vahed"
                                           tabIndex="29"/>
                                    <div className="text-30 iransans-light-black-13px">: واحد</div>
                                    <input disabled className="rectangle-18-4 border-1px-navy-blue"
                                           id="tabaghat" tabIndex="28"/>
                                    <div className="text-31 iransans-light-black-13px">: تعداد
                                        طبقات
                                    </div>
                                </div>
                            </div>
                            <img className="bar" src={require('../image/bar@1x.png')}/>
                            <div id="table" className="table" style={{marginBottom: 0}}>
                                <div className="sub-bar2-1 border-1px-dove-gray">
                                    <input disabled className="rectangle-30 border-1px-navy-blue" id='tableMetri0' tabIndex="46"/>
                                    <input disabled className="rectangle border-1px-navy-blue" id='tableTotalAmount0'
                                           tabIndex="45"/>
                                    <input disabled className="rectangle-17 border-1px-navy-blue" id="tableAnbari0"
                                           tabIndex="44"/>
                                    <input disabled className="rectangle-17 border-1px-navy-blue" id="tableParking0"
                                           tabIndex="43"/>
                                    <input disabled className="rectangle-28 border-1px-navy-blue" id="tableKafPoosh0"
                                           tabIndex="42"/>
                                    <input disabled className="rectangle-27 border-1px-navy-blue" id="tableWC0"
                                           tabIndex="41"/>
                                    <input disabled type="checkbox" className="ch-open border-1px-denim" id='tableOpen0'
                                           tabIndex="40"/>
                                    <input disabled className="rectangle-26 border-1px-navy-blue" id="tableKitchen0"
                                           tabIndex="39"/>
                                    <input disabled className="rectangle-2 border-1px-navy-blue" id="tableTelephone0"
                                           tabIndex="38"/>
                                    <input disabled type="checkbox" className="ch-open border-1px-denim"
                                           style={{marginRight: 15}} id='tableBalcon0' tabIndex="37"/>
                                    <input disabled className="rectangle-2-1 border-1px-navy-blue" id='tableKhab0'
                                           tabIndex="36"/>
                                    <input disabled className="rectangle-2-1 border-1px-navy-blue"
                                           id='tableZirBana0' tabIndex="35"/>
                                    <input disabled className="rectangle-2 border-1px-navy-blue"
                                           id='tableFloor0' tabIndex="34"/>
                                </div>
                            </div>

                            <div className="flex-row-5">
                                <div className="estakhr-sona">
                                    <div className="flex-col-7">
                                        <input disabled className="rectangle-34 border-1px-navy-blue" id="pool" tabIndex="49"/>
                                        <input disabled className="rectangle-34-1 border-1px-navy-blue" id="sona" tabIndex="50"/>
                                        <input disabled className="rectangle-34-2 border-1px-navy-blue" id="jakoozi" tabIndex="51"/>
                                    </div>
                                    <div className="flex-col-8">
                                        <div className="text iransans-light-chocolate-13px">: استخر</div>
                                        <div className="text-34 iransans-light-chocolate-13px">: سونا</div>
                                        <div className="text-35 iransans-light-chocolate-13px">: جکوزی</div>
                                    </div>
                                </div>
                                <div className="emkanat border-1px-dove-gray">
                                    <div style={{flex: 1, height: '100%'}} id="equipmentResultList"></div>
                                </div>
                            </div>
                            <div className="flex-row-6">
                                <div className="ejadeh-takhliyeh border-1px-dove-gray">
                                    <div className="flex-row-7">
                                        <div className="text-48 iransans-light-red-devil-13px">تخلیه</div>
                                        <div className="text-47 iransans-light-red-devil-13px">اجاره</div>
                                        <div className="text-49 iransans-light-red-devil-13px">مسکونی</div>
                                    </div>
                                    <div className="group-18">
                                        <input disabled type="checkbox" className="ch-takhliyeh border-1px-denim" id="discharge"
                                               tabIndex="65"/>
                                        <input disabled type="checkbox" className="ch-ejareh border-1px-denim" id="rented"
                                               tabIndex="64"/>
                                        <input disabled type="checkbox" className="ch-maskoni border-1px-denim"
                                               id="residential" tabIndex="63"/>
                                    </div>
                                </div>
                                <div className="mostakhdem border-1px-dove-gray">
                                    <div className="flex-col-9">
                                        <div className="text-46 iransans-light-red-devil-13px">سکونت مالک</div>
                                        <input disabled className="rectangle-3-2 border-1px-navy-blue" id="residenceOwner"
                                               tabIndex="62"/>
                                    </div>
                                    <div className="flex-col-10">
                                        <div className="text-45 iransans-light-red-devil-13px">سرویس مستخدم</div>
                                        <input disabled className="rectangle-3-2 border-1px-navy-blue" id="employeeService"
                                               tabIndex="61"/>
                                    </div>
                                </div>
                                <div className="moshaat border-1px-dove-gray">
                                    <div className="flex-col-11">
                                        <div className="text-42 iransans-light-red-devil-13px">زیر زمین</div>
                                        <input disabled className="rectangle-36 border-1px-navy-blue" id="basement" tabIndex="60"/>
                                    </div>
                                    <div className="flex-col-12">
                                        <div className="text-41 iransans-light-red-devil-13px">پاسیو</div>
                                        <input disabled className="rectangle-36 border-1px-navy-blue" id="patio" tabIndex="59"/>
                                    </div>
                                    <div className="flex-col-13">
                                        <div className="text-43 iransans-light-red-devil-13px">حیاط خلوت</div>
                                        <input disabled className="rectangle-36-1 border-1px-navy-blue" id="backYard" tabIndex="58"/>
                                    </div>
                                    <div className="flex-col-14">
                                        <div className="text-44 iransans-light-red-devil-13px">حیاط</div>
                                        <input disabled className="rectangle-36-1 border-1px-navy-blue" id="yard" tabIndex="57"/>
                                    </div>
                                </div>
                                <div className="masahat-zamin border-1px-dove-gray">
                                    <div className="overlap-group10">
                                        <div className="text-37 iransans-light-red-devil-13px">ارتفاع</div>
                                        <input disabled className="rectangle-36-2 border-1px-navy-blue" id="height" tabIndex="56"/>
                                    </div>
                                    <div className="overlap-group">
                                        <div className="text-36 iransans-light-red-devil-13px">اصلاحی</div>
                                        <input disabled className="rectangle-36-2 border-1px-navy-blue" id="corrective"
                                               tabIndex="55"/>
                                    </div>
                                    <div className="overlap-group8">
                                        <div className="text-38 iransans-light-red-devil-13px">طول بر</div>
                                        <input disabled className="rectangle-36-2 border-1px-navy-blue" id="toolBar" tabIndex="54"/>
                                    </div>
                                    <div className="overlap-group">
                                        <div className="text-39 iransans-light-red-devil-13px">تراکم</div>
                                        <input disabled className="rectangle-36-2 border-1px-navy-blue" id="density" tabIndex="53"/>
                                    </div>
                                    <div className="overlap-group6">
                                        <div className="text-40 iransans-light-red-devil-13px">مساحت زمین</div>
                                        <input disabled className="rectangle-35 border-1px-navy-blue" id="area" tabIndex="52"/>
                                    </div>
                                </div>
                            </div>
                            <div className="tanzim-konandeh border-1px-dove-gray">
                                <input disabled className="rectangle-18-5 border-1px-navy-blue" id="ownerName" tabIndex="71"
                                       disabled/>
                                <div className="text-50 iransans-light-black-13px">: تنظیم کننده</div>
                                <input disabled className="rectangle-38 border-1px-navy-blue" id="username" tabIndex="70"
                                       disabled/>
                                <div className="text-54 iransans-light-black-13px">: ثبت کننده</div>
                                <input disabled className="rectangle-18-6 border-1px-navy-blue" id="InformationSource"
                                       tabIndex="69"/>
                                <div className="text-51 iransans-light-black-13px">: منبع</div>
                                <input disabled className="rectangle-18-7 border-1px-navy-blue" id="documentState"
                                       tabIndex="68"/>
                                <div className="text-53 iransans-light-black-13px">: سند</div>
                                <input disabled className="rectangle border-1px-navy-blue" id="view" tabIndex="67"/>
                                <div className="text-52 iransans-light-black-13px">: نما</div>
                                <input disabled className="rectangle-18-8 border-1px-navy-blue" id="ageBuilding"
                                       tabIndex="66"/>
                                <div className="text-55 iransans-light-black-13px">: سن بنا</div>
                            </div>
                            <div className="overlap-group2">
                                <div className="tozihat border-1px-dove-gray">
                                    <div className="flex-col-15">
                                        <input disabled type="checkbox" className="ch-hame border-1px-denim" id="allParticipation"
                                               tabIndex="74" name="participation[]"/>
                                        <input disabled type="checkbox" className="ch-khososi border-1px-denim"
                                               id="privateParticipation" tabIndex="76" name="participation[]"/>
                                    </div>
                                    <div className="flex-col-16">
                                        <input disabled type="checkbox" className="ch-malek-ajaleh-darad border-1px-denim"
                                               id="isHurry" tabIndex="73"/>
                                        <input disabled type="checkbox" className="ch-taavon border-1px-denim"
                                               id="consultingCooperativeParticipation"
                                               tabIndex="75" name="participation[]"/>
                                    </div>
                                    <input disabled className="txt-tozihat border-1px-navy-blue" id="additionalDescription"
                                           tabIndex="72"/>
                                    <div className="text-56 iransans-light-black-13px">: توضیحات</div>
                                </div>
                                <div className="jahat-1">
                                    <div className="flex-col-17">
                                        <div className="text-57 iransans-light-black-13px">همه</div>
                                        <div className="text-2 iransans-light-black-13px">خصوصی</div>
                                    </div>
                                    <div className="flex-col-18">
                                        <div className="text-58 iransans-light-black-13px">مالک عجله دارد</div>
                                        <div className="text-2 iransans-light-black-13px">تعاون مشاور</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-row-8">
                                <div className="shomareh border-1px-dove-gray">
                                    <input disabled className="rectangle-41 border-1px-navy-blue" id="number" tabIndex="77" disabled/>
                                    <div className="text-61 iransans-light-black-13px">: شماره فایل</div>
                                </div>
                                <div className="button">
                                    <div className="overlap-group11 border-1px-dove-gray">

                                        <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                                            <a><img
                                                className="path-arrow-left-bold-box"
                                                src={require('../image/path---arrow-left-bold-box@1x.png')}
                                                onClick={this.onPrevFileClick}
                                                id="btn-prev"
                                            /></a>
                                            <a><img className="path-arrow-right-bold-box"
                                                    src={require('../image/path---arrow-right-bold-box@1x.png')}
                                                    id="btn-next" onClick={this.onNextFileClick}/></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


            </div>


        );
    }
}

const mapStateToProps = state => {
    const user = state.user;
    const fileRequestObject = state.fileRequestObject;
    return {user, fileRequestObject};
};

export default connect(mapStateToProps, {setUser, setState, setFileSearchRequest})(withTranslation()(fileDetail));
