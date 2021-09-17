import React from 'react';
import '../css/style.css';
import '../css/color.css';
import 'react-awesome-slider/dist/styles.css';
import {withTranslation, Trans} from 'react-i18next'
import $ from 'jquery';
import connect from "react-redux/es/connect/connect";
import {setState, setUser} from "../../components/redux/actions";
import Services from "../../utils/Services";
import _ from "underscore";
import * as StringUtils from "../../utils/StringUtils";
import {NotificationContainer, NotificationManager} from "react-notifications";
import Doka, {imageList} from "./dropZone";
import ScaleLoader from "react-spinners/ScaleLoader";

class profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
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

    hideLoading() {
        this.setState({
            isLoading: false
        })
    }

    logoutRealEstate = () => {
        Services.logoutRealEstate().then(() => {
            sessionStorage.clear();
            localStorage.clear();
            this.props.setUser({});
            this.props.history.push({
                pathname: '/'
            });
        }).catch(() => {
            sessionStorage.clear();
            localStorage.clear();
            this.props.setUser({});
            this.props.history.push({
                pathname: '/'
            });
        })

    };

    onSubmitChangesClick = () => {
        this.setState({
            isLoading: true
        }, () => {
            const data = new FormData();
            data.append('file', imageList[0]);
            data.append('agencyCode', this.props.user.agencyCode);
            data.append('agencyName', document.getElementById('agencyName').value);
            data.append('managementName', document.getElementById('managementName').value);
            data.append('telephone', document.getElementById('telephone').value);
            data.append('personalTelephone', document.getElementById('personalTelephone').value);
            data.append('postalCode', document.getElementById('postalCode').value);
            data.append('marketer', document.getElementById('marketer').value);
            data.append('visitor', document.getElementById('visitor').value);
            Services.editRealStateProfile(data).then((response) => {
                this.hideLoading();
                this.props.setUser({
                    agencyName: document.getElementById('agencyName').value,
                    managementName: document.getElementById('managementName').value,
                    telephone: document.getElementById('telephone').value,
                    personalTelephone: document.getElementById('personalTelephone').value,
                    postalCode: document.getElementById('postalCode').value,
                    marketer: document.getElementById('marketer').value,
                    visitor: document.getElementById('visitor').value,
                });
                NotificationManager.success('موفق', 'تغییر اطلاعات کاربر با موفقیت ثبت شد');
            }).catch((error) => {
                this.hideLoading();
                NotificationManager.error('خطا', 'خطا در تغییر اطلاعات کاربر', 5000);
            });
        })
    };

    render() {
        return (
            <div id='root-div' style={{marginTop: 0}}>
                <NotificationContainer/>
                <div id="wrapper">

                    <div className="clearfix"></div>

                    <div id="titlebar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <h2>پروفایل من</h2>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">


                            <div className="col-md-4">
                                <div className="sidebar left">

                                    <div className="my-account-nav-container">

                                        <ul className="my-account-nav">
                                            <li className="sub-nav-title">مدیریت حساب کاربری</li>
                                            <li><a className="current"><i
                                                className="sl sl-icon-user"></i> پروفایل من</a></li>

                                        </ul>


                                        <ul className="my-account-nav">
                                            <li><a href="change-password.html"><i className="sl sl-icon-lock"></i> تغییر
                                                رمز عبور</a></li>
                                            <li><a onClick={this.logoutRealEstate}><i className="sl sl-icon-power"></i> خروج</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="row">


                                    <div className="col-md-8 my-profile">
                                        <label> نام آژانس</label>
                                        <input value={this.props.user.agencyName} id='agencyName' type="text"/>

                                            <label>نام مدیریت</label>
                                            <input value={this.props.user.managementName} id='managementName' type="text"/>

                                                <label>شماره تماس</label>
                                                <input value={this.props.user.telephone} id='telephone' style={{direction: "ltr"}} type="text"/>

                                                    <label>موبایل مدیریت</label>
                                                    <input value={this.props.user.personalTelephone} id='personalTelephone' style={{direction: "ltr"}} type="text"/>

                                                        <label>کد پستی</label>
                                                        <input style={{direction: "ltr"}} value={this.props.user.postalCode} id='postalCode' type="text"/>

                                                            <label>بازریاب</label>
                                                            <input style={{direction: "ltr"}} value={this.props.user.marketer} id='marketer' type="text"/>

                                                                <label>ویزیتور</label>
                                                                <input style={{direction: "ltr"}} value={this.props.user.visitor} id='visitor' type="text"/>


                                                                    <h4 className="margin-top-50 margin-bottom-25">مناطق</h4>
                                                                    <div className="region_list" id="region_list"
                                                                         style={{display: "flex", flexDirection:"row"}}>
                                                                        <div className="code_m"
                                                                             style={{marginLeft: 60}}><h1>کد منطقه</h1>
                                                                            {this.props.user.regionList && this.props.user.regionList.map((region) => {
                                                                                return(
                                                                                    <div className="region_code"
                                                                                         id="region_code">{region.regionCode}
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                        <div className="regionn"><h2>مناطق</h2>
                                                                            {this.props.user.regionList && this.props.user.regionList.map((region) => {
                                                                                return(
                                                                                    <div className="region" id="region">{region.regionName}
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>


                                                                    </div>

                                        {this.state.isLoading ?
                                            <ScaleLoader loading={true} color={"#274abb"} size={150}/> :
                                            <button onClick={this.onSubmitChangesClick}
                                                    className="button margin-top-20 margin-bottom-20">ذخیره
                                                ی تغییرات
                                            </button>
                                        }

                                    </div>

                                    <div className="col-md-4">
                                        <div className="edit-profile-photo">
                                            <Doka/>
                                        </div>
                                        {this.props.user.image && <img src={Services.getRealStateProfileImageDownloadUrl(this.props.user.image)} alt=""/>}

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
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(profile));
