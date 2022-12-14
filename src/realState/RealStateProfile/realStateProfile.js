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
                NotificationManager.success('????????', '?????????? ?????????????? ?????????? ???? ???????????? ?????? ????');
            }).catch((error) => {
                this.hideLoading();
                NotificationManager.error('??????', '?????? ???? ?????????? ?????????????? ??????????', 5000);
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

                                    <h2>?????????????? ????</h2>


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
                                            <li className="sub-nav-title">???????????? ???????? ????????????</li>
                                            <li><a className="current"><i
                                                className="sl sl-icon-user"></i> ?????????????? ????</a></li>

                                        </ul>


                                        <ul className="my-account-nav">
                                            <li><a href="change-password.html"><i className="sl sl-icon-lock"></i> ??????????
                                                ?????? ????????</a></li>
                                            <li><a onClick={this.logoutRealEstate}><i className="sl sl-icon-power"></i> ????????</a></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>



                            <div className="col-md-8">
                                <div style={{display: 'flex', flexDirection: 'column'}}>


                                    <div className="col-md-4" style={{display: 'flex', width: '100%'}}>
                                        <div className="edit-profile-photo">
                                            <Doka/>
                                        </div>
                                        {this.props.user.image && <img style={{width: 200, height: 160}} src={Services.getRealStateProfileImageDownloadUrl(this.props.user.image)} alt=""/>}

                                    </div>
                                    <div className="col-md-8 my-profile">
                                        <label> ?????? ??????????</label>
                                        <input value={this.props.user.agencyName} id='agencyName' type="text"/>

                                            <label>?????? ????????????</label>
                                            <input value={this.props.user.managementName} id='managementName' type="text"/>

                                                <label>?????????? ????????</label>
                                                <input value={this.props.user.telephone} id='telephone' style={{direction: "ltr"}} type="text"/>

                                                    <label>???????????? ????????????</label>
                                                    <input value={this.props.user.personalTelephone} id='personalTelephone' style={{direction: "ltr"}} type="text"/>

                                                        <label>???? ????????</label>
                                                        <input style={{direction: "ltr"}} value={this.props.user.postalCode} id='postalCode' type="text"/>

                                                            <label>??????????????</label>
                                                            <input style={{direction: "ltr"}} value={this.props.user.marketer} id='marketer' type="text"/>

                                                                <label>??????????????</label>
                                                                <input style={{direction: "ltr"}} value={this.props.user.visitor} id='visitor' type="text"/>


                                                                    <h4 className="margin-top-50 margin-bottom-25">??????????</h4>
                                                                    <div className="region_list" id="region_list"
                                                                         style={{display: "flex", flexDirection:"row"}}>
                                                                        <div className="code_m"
                                                                             style={{marginLeft: 60}}><h1>???? ??????????</h1>
                                                                            {this.props.user.regionList && this.props.user.regionList.map((region) => {
                                                                                return(
                                                                                    <div className="region_code"
                                                                                         id="region_code">{region.regionCode}
                                                                                    </div>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                        <div className="regionn"><h2>??????????</h2>
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
                                                    className="button margin-top-20 margin-bottom-20">??????????
                                                ?? ??????????????
                                            </button>
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
    return {user};
};

export default connect(mapStateToProps, {setUser, setState})(withTranslation()(profile));
