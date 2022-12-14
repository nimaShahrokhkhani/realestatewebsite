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
import {NotificationContainer} from "react-notifications";
import Slider from "react-slick/lib";

class fileDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: {},
            activeNav: 1,
            isErrorPage: false
        };
        this.file = undefined;
    }

    getFile(fileId) {
        Services.getFileById({Id: fileId}).then(response => {
            this.file = response.data;
            // this.showFile(response.data)
            this.setState({
                file: response.data
            })
        }).catch(error => {
            if (error.message.includes('403')) {
                sessionStorage.clear();
                localStorage.clear();
                this.props.setUser({});
                this.props.history.push({
                    pathname: '/loginPanel'
                });
            } else {
                this.setState({isErrorPage: true})
            }
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
        }).catch(error => {
            if (error.message.includes('403')) {
                sessionStorage.clear();
                localStorage.clear();
                this.props.setUser({});
                this.props.history.push({
                    pathname: '/loginPanel'
                });
            }
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
        }).catch(error => {
            if (error.message.includes('403')) {
                sessionStorage.clear();
                localStorage.clear();
                this.props.setUser({});
                this.props.history.push({
                    pathname: '/loginPanel'
                });
            }
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
            document.querySelector('#sale').checked = file.sale === '????????';
            document.querySelector('#rent').checked = file.sale === '??????????';
            document.querySelector('#mortgage').checked = file.sale === '??????';
            document.querySelector('#partnership').checked = file.sale === '????????????';
            document.querySelector('#exchange').checked = file.sale === '????????????';
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
            document.querySelector('#allParticipation').checked = file.participation === '??????';
            document.querySelector('#privateParticipation').checked = file.participation === '??????????';
            document.querySelector('#consultingCooperativeParticipation').checked = file.participation === '?????????? ??????????';
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
            element.src = "../scripts/owl.carousel.min.js";
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

    getFileType(file) {
        var noeMelkValue = "";
        if (file.apartment) {
            noeMelkValue += "???????????????? (" + file.apartment + ')'
        }
        if (file.vila) {
            noeMelkValue += "???????? (" + file.vila + ')'
        }
        if (file.land) {
            noeMelkValue += "???????? (" + file.land + ')'
        }
        if (file.building) {
            noeMelkValue += "?????????????? (" + file.building + ')'
        }
        if (file.oldHouse) {
            noeMelkValue += "?????????? (" + file.oldHouse + ')'
        }
        if (file.office) {
            noeMelkValue += "???????? ?????? (" + file.office + ')'
        }
        if (file.store) {
            noeMelkValue += "?????????? "
        }
        if (file.suit) {
            noeMelkValue += "?????????? "
        }
        return noeMelkValue;
    }

    getFileDirection(file) {
        let directionValue = "";
        if (file.north) {
            directionValue = "??????????"
        }
        if (file.south) {
            directionValue = "??????????"
        }
        if (file.east) {
            directionValue = "????????"
        }
        if (file.west) {
            directionValue = "????????"
        }
        return directionValue;
    }

    render() {
        let {file} = this.state;
        return (
            <div id="root-div">
                <NotificationContainer/>

                <div id="wrapper">

                    <div className="clearfix"></div>

                    <div id="titlebar" className="property-titlebar margin-bottom-0">
                        <div className="container">
                            <div className="row">
                                <div style={{display: 'flex'}} className="col-md-12">

                                    <img style={{width: '20%'}} src={require("../image/house-file.png")}/>
                                    <div style={{width: '80%', paddingRight: 85}}>
                                        <h2>{this.getFileType(file)} <span className="property-badge">{file.sale}</span>
                                        </h2>
                                        <h1>{file.Id}
                                        </h1>
                                        <span>
						<a href="#location" className="listing-address">
							<i className="fa fa-map-marker"></i>
						</a>
					</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 col-md-7 sp-content">
                                <div className="property-description">

                                    <h3 className="desc-headline">?????????????? ????????</h3>
                                    <ul className="property-features  margin-top-0">
                                        <li>?????????? ??????: <span id={"updateDate"}>{StringUtils.convertMillisecondToShamsi(file.updateDate)}</span>
                                        </li>
                                        <li>?????? ????????: <span id={"owner"}>{file.owner}</span>
                                        </li>
                                        <li>???????? ????????: <span id={"tel1"}>{file.tel1}</span>
                                        </li>
                                        <li>???????? ????????: <span id={"tel2"}>{file.tel2}</span>
                                        </li>
                                        <li>???????? ????????: <span id={"tel2"}>{file.address}</span>
                                        </li>
                                    </ul>

                                    <h3 className="desc-headline">?????????????? ??????</h3>
                                    <ul className="property-features  margin-top-0">
                                        <li>???????? ????????: <span id={"unitMetri"}>{file.unitPrice}</span></li>
                                        <li>???????? ????: <span id={"unitTotalAmount"}>{file.totalPrice}</span></li>
                                        <li>???????? ??????????: <span id={"priceRent"}>{file.rent}</span></li>
                                        <li>???????? ??????: <span id={"priceMortgage"}>{file.mortgage}</span></li>
                                        <li>??????????: <span id={"area"}>{file.area}</span></li>
                                        <li>??????????: <span id={"density"}>{file.density}</span></li>
                                        <li>?????? ????: <span id={"front"}>{file.front}</span></li>
                                        <li>????????????: <span id={"modify"}>{file.modify}</span></li>
                                        <li>????????????: <span id={"height"}>{file.height}</span></li>
                                        <li>??????????: <span id={"unitBuiltUpArea"}>{file.unitBuiltUpArea}</span></li>
                                        <li>???? ??????????: <span id={"direction"}>{file.regionCode}</span></li>
                                        <li>?????? ??????????: <span id={"direction"}>{file.regionName}</span></li>
                                        <li>??????: <span id={"direction"}>{this.getFileDirection(file)}</span></li>
                                        <li>??????????: <span id={"floorNo"}>{file.floorNo}</span></li>
                                        <li>???????? ???? ????????: <span id={"unitNo"}>{file.unitNo}</span></li>
                                        <li> ???? ???????? ????: <span id={"unitNo"}>{file.unitNo}</span></li>
                                        <li>???? ??????: <span id={"aree"}>{file.age}</span></li>
                                        <li>??????: <span id={"document"}>{file.documentKind}</span></li>
                                        <li>??????: <span id={"nama"}>{file.frontKind}</span></li>
                                        <li>????????: <span id={"source"}>{file.source}</span></li>
                                        <li>????????: <span id={"yard"}>{file.yard}</span></li>
                                        <li>???????? ????????: <span id={"smallYard"}>{file.smallYard}</span></li>
                                        <li>??????????: <span id={"patio"}>{file.patio}</span></li>
                                        <li>??????????????: <span id={"underGround"}>{file.underGround}</span></li>
                                        <li>??????????: <span id={"pool"}>{file.pool}</span></li>
                                        <li>????????: <span id={"sona"}>{file.sona}</span></li>
                                        <li>??????????: <span id={"jakozi"}>{file.jakozi}</span></li>
                                        <li>?????????? ????????????: <span id={"employeeService"}>{file.employeeService}</span></li>
                                        <li>?????????? ????????: <span id={"ownerInHouse"}>{file.ownerInHouse}</span></li>
                                    </ul>

                                    <h3 className="desc-headline">?????????????? ????????</h3>
                                    <ul className="property-features  margin-top-0">
                                        <li>???????? ????????: <span id={"unitComment"}>{file.unitComment}</span></li>
                                        <li>???????? ????: <span id={"unitTotalAmount"}>{file.unitTotalAmount}</span></li>
                                        <li>???????? ??????????: <span id={"priceRent"}>{file.rent}</span></li>
                                        <li>???????? ??????: <span id={"priceMortgage"}>{file.mortgage}</span></li>
                                        <li>?????????? ????????: <span id={"priceComment"}>{file.priceComment}</span></li>
                                        <li>??????????: <span id={"unitBuiltUpArea"}>{file.unitBuiltUpArea}</span></li>
                                        <li>????????: <span id={"room"}>{file.unitRoom}</span></li>
                                        <li>????????: <span id={"unitTelephone"}>{file.unitTelephone}</span></li>
                                        <li>??????????: <span id={"unitFloorCovering"}>{file.unitFloorCovering}</span></li>
                                        <li> ????????/??????????????: <span id={"unitWC"}>{file.unitWC}</span></li>
                                        <li>??????????: <span id={"balkon"}>{file.unitBalcony}</span></li>
                                        <li>????????????????: <span id={"kitchenService"}>{file.kitchenService}</span></li>
                                        <li>????????: <span id={"unitFloor"}>{file.unitFloor}</span></li>
                                        <li>??????????????: <span id={"unitParking"}>{file.unitParking}</span></li>
                                        <li>????????????: <span id={"unitAnbari"}>{file.unitAnbari}</span></li>
                                    </ul>

                                    <h3 className="desc-headline">?????????????? ??????</h3>
                                    <ul className="property-features checkboxes margin-top-0">
                                        {file.residential && <li>???????????? </li>}
                                        {file.rented && <li>?????????? </li>}
                                        {file.empty && <li>?????????? </li>}
                                        {file.inHurry && <li>???????? ???????? ???????? </li>}
                                    </ul>


                                    <h3 className="desc-headline">??????????????</h3>
                                    <ul className="property-features checkboxes margin-top-0">
                                        {file.equipments && file.equipments.map((equipment) => {
                                            return (
                                                <li>{equipment}</li>
                                            )
                                        })}
                                    </ul>

                                    <h3 className="desc-headline">??????????????</h3>
                                    <div className="show-more">
                                        {file.comment}

                                        <a href="#" className="show-more-button">?????????? <i
                                            className="fa fa-angle-down"></i></a>
                                    </div>

                                    <div className="overlap-group11">

                                        <div style={{display: 'flex', flex: 1, justifyContent: 'space-around'}}>
                                            <a><img className="path-arrow-right-bold-box"
                                                    src={require('../image/path---arrow-right-bold-box@1x.png')}
                                                    id="btn-next" onClick={this.onNextFileClick}/></a>
                                            <a><img
                                                className="path-arrow-left-bold-box"
                                                src={require('../image/path---arrow-left-bold-box@1x.png')}
                                                onClick={this.onPrevFileClick}
                                                id="btn-prev"
                                            /></a>
                                        </div>

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

export default connect(mapStateToProps, {setUser, setState, setFileSearchRequest})(withTranslation()(fileDetail));
