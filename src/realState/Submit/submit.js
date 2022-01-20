import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import Services from "../../utils/Services";
import Doka, {imageList} from './dropZone'
import {css} from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import _ from 'underscore';
import connect from "react-redux/es/connect/connect";
import {setFileSearchRequest, setState, setUser} from "../../components/redux/actions";
import * as StringUtils from "../../utils/StringUtils";

class submit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1,
            isLoading: false,
            configList: []
        };
        this.finalEquipmentList = [];
    }

    submitAdvertise = () => {
        this.setState({
            isLoading: true
        }, () => {
            Services.geAdvertiseTotalCount().then(response => {
                const data = new FormData();
                for (let image of imageList) {
                    data.append('files', image);
                }
                data.append('advertisingCode', response.data);
                data.append('date', new Date().getTime());
                data.append('title', document.getElementById('titleSubmit').value);
                data.append('sale', document.getElementById('conditionSubmit').value);
                data.append('type', document.getElementById('kindSubmit').value);
                data.append('totalPrice', !_.isEmpty(document.getElementById('priceTotalSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('priceTotalSubmit').value)) : 0);
                data.append('unitPrice', !_.isEmpty(document.getElementById('priceMetriSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('priceMetriSubmit').value)) : 0);
                data.append('rent', !_.isEmpty(document.getElementById('priceRentSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('priceRentSubmit').value)) : 0);
                data.append('mortgage', !_.isEmpty(document.getElementById('priceMortgageSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('priceMortgageSubmit').value)) : 0);
                data.append('area', !_.isEmpty(document.getElementById('areaSubmit').value) ?
                    parseFloat(StringUtils.convertNumbersToEnglish(document.getElementById('areaSubmit').value)) : 0);
                data.append('unitRoom', !_.isEmpty(document.getElementById('roomSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('roomSubmit').value)) : 0);
                data.append('address', document.getElementById('addressSubmit').value);
                data.append('direction', document.getElementById('directionSubmit').value);
                data.append('floorCovering', document.getElementById('floorCoveringSubmit').value);
                data.append('unitBalcony', document.getElementById('unitBalconySubmit').value);
                data.append('kitchenService', document.getElementById('kitchenServiceSubmit').value);
                data.append('floorSubmit', document.getElementById('floorSubmit').value);
                data.append('unitBuiltUpArea', document.getElementById('unitBuiltUpAreaSubmit').value);
                data.append('documentKind', document.getElementById('documentSubmit').value);
                data.append('frontKind', document.getElementById('frontKindSubmit').value);
                data.append('parking', document.getElementById('parkingSubmit').value);
                data.append('warehouse', document.getElementById('warehouseSubmit').value);
                data.append('city', document.getElementById('citySubmit').value);
                data.append('province', document.getElementById('provinceSubmit').value);
                data.append('postalCode', document.getElementById('codePostAddress').value);
                data.append('comment', document.getElementById('explainSubmit').value);
                data.append('age', document.getElementById('ageSubmit').value);
                data.append('unitWC', !_.isEmpty(document.getElementById('bathSubmit').value) ?
                    parseInt(StringUtils.convertNumbersToEnglish(document.getElementById('bathSubmit').value)) : 0);
                data.append('realStateAccess', document.getElementById('realestateAccess').value);
                data.append('contactInfoName', document.getElementById('nameSubmit').value);
                data.append('contactInfoTel', document.getElementById('emailSubmit').value);
                data.append('contactInfoEmail', document.getElementById('telSubmit').value);
                data.append('equipments', this.finalEquipmentList);
                data.append('username', this.props.user.username);
                Services.insertAdvertise(data).then((response) => {
                    this.hideLoading();
                    NotificationManager.success('موفق', 'آگهی با موفقیت ثبت شد');
                }).catch((error) => {
                    this.hideLoading();
                    NotificationManager.error('خطا', 'خطا در ثبت آگهی', 5000);
                });
            }).catch(error => {
                this.hideLoading();
                NotificationManager.error('خطا', 'خطا در ثبت آگهی', 5000);
            });
        })
    };

    getConfigList() {
        Services.getConfigList().then(response => {
            this.setState({
                configList: response.data[0]
            })
        }).catch(error => {

        })
    }

    hideLoading() {
        this.setState({
            isLoading: false
        })
    }

    componentDidMount() {
        this.getConfigList();
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

    render() {
        return (
            <div id="root-div" style={{marginTop: 0}}>
                <NotificationContainer/>
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
                                                    <option label=""></option>
                                                    <option>فروشی</option>
                                                    <option>اجاره ای</option>
                                                    <option>رهن</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>نوع</h5>
                                                <select className="chosen-select-no-single" id="kindSubmit">
                                                    <option label=""></option>
                                                    <option>آپارتمان</option>
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
                                                <h5>قیمت متری</h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="priceMetriSubmit" type="text" data-unit="تومان"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <h5>قیمت کل</h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="priceTotalSubmit" type="text" data-unit="تومان"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <h5>قیمت اجاره </h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="priceRentSubmit" type="text" data-unit="تومان"/>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <h5>قیمت رهن </h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="priceMortgageSubmit" type="text" data-unit="تومان"/>
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
                                                    <option label=""></option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>بیشتر از 5 اتاق</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>جهت ملک</h5>
                                                <select className="chosen-select-no-single" id="directionSubmit">
                                                    <option label=""></option>
                                                    <option>شمالی</option>
                                                    <option>شرقی</option>
                                                    <option>جنوبی</option>
                                                    <option>غربی</option>

                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>کفپوش</h5>
                                                <select className="chosen-select-no-single" id="floorCoveringSubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.floorCovering && this.state.configList.floorCovering.map(floorCovering => {
                                                        return (
                                                            <option>{floorCovering}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>بالکن</h5>
                                                <select className="chosen-select-no-single" id="unitBalconySubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.patio && this.state.configList.patio.map(patio => {
                                                        return (
                                                            <option>{patio}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>آشپزخانه</h5>
                                                <select className="chosen-select-no-single" id="kitchenServiceSubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.kitchenService && this.state.configList.kitchenService.map(kitchenService => {
                                                        return (
                                                            <option>{kitchenService}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>طبقه</h5>
                                                <select className="chosen-select-no-single" id="floorSubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.floor && this.state.configList.floor.map(floor => {
                                                        return (
                                                            <option>{floor}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>سن بنا</h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="ageSubmit" type="text" data-unit=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>متراژ</h5>
                                                <div className="select-input disabled-first-option">
                                                    <input id="unitBuiltUpAreaSubmit" type="text" data-unit=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>سند</h5>
                                                <select className="chosen-select-no-single" id="documentSubmit">
                                                    <option label=""></option>
                                                        {this.state.configList.documentKind && this.state.configList.documentKind.map(documentKind => {
                                                            return (
                                                                <option>{documentKind}</option>
                                                            )
                                                        })}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>نما</h5>
                                                <select className="chosen-select-no-single" id="frontKindSubmit">
                                                    <option></option>
                                                    {this.state.configList.frontKind && this.state.configList.frontKind.map(frontKind => {
                                                        return (
                                                            <option>{frontKind}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                        </div>

                                        <div className="row with-forms">

                                            <div className="col-md-6">
                                                <h5>پارکینگ</h5>
                                                <select className="chosen-select-no-single" id="parkingSubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.parking && this.state.configList.parking.map(parking => {
                                                        return (
                                                            <option>{parking}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <h5>انباری</h5>
                                                <select className="chosen-select-no-single" id="warehouseSubmit">
                                                    <option label=""></option>
                                                    {this.state.configList.warehouse && this.state.configList.warehouse.map(warehouse => {
                                                        return (
                                                            <option>{warehouse}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                    <h3>گالری</h3>

                                    <Doka
                                        onDropRejected={() => {
                                            NotificationManager.error('خطا', 'تعداد فایل از ۴ بیشتر است', 5000);
                                        }}/>

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
                                            <textarea className="WYSIWYG" name="summary" cols="40" rows="3"
                                                      id="summary"
                                                      spellCheck="true" id="explainSubmit"/>
                                        </div>

                                        <div className="row with-forms">

                                            <div className="col-md-4">
                                                <h5>عمر ساخت <span></span></h5>
                                                <select className="chosen-select-no-single" id="ageSubmit">
                                                    <option></option>
                                                    <option>0 - 1 سال</option>
                                                    <option>0 - 5 سال</option>
                                                    <option>0 - 10 سال</option>
                                                    <option>0 - 20 سال</option>
                                                    <option>0 - 50 سال</option>
                                                    <option>بالای 50 سال</option>
                                                </select>
                                            </div>


                                            <div className="col-md-4">
                                                <h5>حمام و دستشویی <span></span></h5>
                                                <select className="chosen-select-no-single" id="bathSubmit">
                                                    <option></option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>در اختیار مشاورین املاک قرار بگیرد <span></span></h5>
                                                <select className="chosen-select-no-single" id="realestateAccess">
                                                    <option></option>
                                                    <option>در اختیار مشاورین املاک قرار بگیرد </option>
                                                    <option>در اختیار مشاورین املاک قرار نگیرد </option>
                                                </select>
                                                <br/>

                                            </div>


                                            <h5 className="margin-top-30">ویژگی های دیگر <span></span></h5>
                                            <div className="checkboxes in-row margin-bottom-20">

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
                                                    <h5>تلفن <span></span></h5>
                                                    <input type="text" style={{direction: "ltr"}} id="telSubmit"/>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="divider"></div>
                                        {this.state.isLoading ?
                                            <ScaleLoader loading={true} color={"#274abb"} size={150}/> :
                                            <a onClick={this.submitAdvertise}
                                               className="button preview margin-top-5">ثبت <i
                                                className="fa fa-arrow-circle-left"></i></a>
                                        }

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

const mapStateToProps = state => {
    const user = state.user;
    const fileRequestObject = state.fileRequestObject;
    return {user, fileRequestObject};
};

export default connect(mapStateToProps, {setUser, setState, setFileSearchRequest})(withTranslation()(submit));
