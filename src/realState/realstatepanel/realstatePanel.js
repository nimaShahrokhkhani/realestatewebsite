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
        this.saleType = undefined;
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
        return saleType === '????????' || saleType === '????????????' || saleType === '????????????'
    }

    getAreaRange() {
        let area = document.getElementById('area').value;
        switch (area) {
            case '-????':
                return [0, 50];
            case '???? ???? ??????':
                return [50, 100];
            case '?????? ???? ??????':
                return [100, 120];
            case '?????? ???? ??????':
                return [120, 150];
            case '?????? ???? ??????':
                return [150, 300];
            case '?????? ???? ????????':
                return [300, 1000];
            case '???????? ???? ??????????':
                return [1000, 10000];
            case '+??????????':
                return [10000, Number.MAX_SAFE_INTEGER];
            default:
                return undefined;
        }
    }

    searchFile = () => {
        let saleType = this.saleType;
        let areaRange = this.getAreaRange();
        let requestObject = {
            sale: saleType,
            regionCode: document.getElementById('regionCode').value,
            regionName: document.getElementById('regionName').value,
            fromArea: areaRange ? areaRange[0] : undefined,
            toArea: areaRange ? areaRange[1] : undefined,
            fromUnitPrice: this.isSale(saleType) ? (document.getElementById('fromUnitPrice').value ?
                parseInt(document.getElementById('fromUnitPrice').value) : undefined) : undefined,
            toUnitPrice: this.isSale(saleType) ? (document.getElementById('toUnitPrice').value ?
                parseInt(document.getElementById('toUnitPrice').value) : undefined) : undefined,
            fromTotalPrice: this.isSale(saleType) ? (document.getElementById('fromTotalPrice').value ?
                parseInt(document.getElementById('fromTotalPrice').value) : undefined) : undefined,
            toTotalPrice: this.isSale(saleType) ? (document.getElementById('toTotalPrice').value ?
                parseInt(document.getElementById('toTotalPrice').value) : undefined) : undefined,
            fromMortgage: !this.isSale(saleType) ? (document.getElementById('fromMortgage').value ?
                parseInt(document.getElementById('fromMortgage').value) : undefined) : undefined,
            toMortgage: !this.isSale(saleType) ? (document.getElementById('toMortgage').value ?
                parseInt(document.getElementById('toMortgage').value) : undefined) : undefined,
            fromRent: !this.isSale(saleType) ? (document.getElementById('fromRent').value ?
                parseInt(document.getElementById('fromRent').value) : undefined) : undefined,
            toRent: !this.isSale(saleType) ? (document.getElementById('toRent').value ?
                parseInt(document.getElementById('toRent').value) : undefined) : undefined,
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
            north: document.querySelector('#direction').value ===  '??????????' ? true : undefined,
            south: document.querySelector('#direction').value === '??????????' ? true : undefined,
            east: document.querySelector('#direction').value === '????????' ? true : undefined,
            west: document.querySelector('#direction').value === '????????' ? true : undefined,
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

    onTabClick(tab) {
        this.clearPriceInputsOnTabChange();
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
            this.saleType = '????????';
        } else if (tab === 'tab2') {
            tab2.style.display = 'block';
            tab1.style.display = 'none';
            tab3.style.display = 'none';
            titleTable1.className = '';
            titleTable3.className = '';
            titleTable2.className = 'active';
            this.saleType = '??????????';
        } else {
            tab3.style.display = 'block';
            tab1.style.display = 'none';
            tab2.style.display = 'none';
            titleTable1.className = '';
            titleTable2.className = '';
            titleTable3.className = 'active';
            this.saleType = '??????';
        }
    }

    clearPriceInputsOnTabChange() {
        document.getElementById('fromUnitPrice').value = '';
        document.getElementById('toUnitPrice').value = '';
        document.getElementById('fromTotalPrice').value = '';
        document.getElementById('toTotalPrice').value = '';

        document.getElementById('fromMortgage').value = '';
        document.getElementById('toMortgage').value = '';
        document.getElementById('fromRent').value = '';
        document.getElementById('toRent').value = '';

        document.getElementById('fromTotalMortgage').value = '';
        document.getElementById('toTotalMortgage').value = '';
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

                                <h3 className="search-title">?????????? ?????????? ?????????? ????????(????????????)</h3>

                                <div className="search-type">
                                    <label id='titleTable1' className="active"><input
                                        className="first-tab"
                                        name="tab[]"
                                        onClick={() => this.onTabClick('tab1')}
                                        type="radio"/>??????????</label>
                                    <label id='titleTable2'><input name="tab[]"
                                                                   onClick={() => this.onTabClick('tab2')}
                                                                   type="radio"/>??????????</label>
                                    <label id='titleTable3'><input name="tab[]"
                                                                   onClick={() => this.onTabClick('tab3')}
                                                                   type="radio"/>??????</label>
                                </div>

                                <div className="main-search-box no-shadow">


                                    <div className="row with-forms">

                                        <div className="col-md-3">
                                            <select data-placeholder="??????????" className="chosen-select-no-single"
                                                    name="area" id="area">
                                                <option label="??????????"></option>
                                                <option>-????</option>
                                                <option>???? ???? ??????</option>
                                                <option>?????? ???? ??????</option>
                                                <option>?????? ???? ??????</option>
                                                <option>?????? ???? ??????</option>
                                                <option>?????? ???? ????????</option>
                                                <option>???????? ???? ??????????</option>
                                                <option>+??????????</option>

                                            </select>
                                        </div>

                                        <div className="col-md-3">
                                            <select data-placeholder="??????" className="chosen-select-no-single"
                                                    name="kindPanel" id="kindPanel">
                                                <option label="??????"></option>
                                                <option>????????????????</option>
                                                <option>????????</option>
                                                <option>??????????????</option>
                                                <option>??????????</option>
                                                <option>???????? ??????</option>
                                                <option>????????</option>
                                                <option>??????????</option>
                                                <option>??????????</option>

                                            </select>
                                        </div>

                                        <div className="col-md-2">
                                            <select data-placeholder="???? ?????????? " style={{color: '#888'}}
                                                    name="regionCode" id="regionCode"
                                                    onChange={this.onRegionCodeChange}>
                                                <option key={1} label="???? ?????????? " disabled selected></option>
                                                {regionCodeList && regionCodeList.map(regionCode => {
                                                    return (
                                                        <option key={regionCode}>{regionCode}</option>
                                                    )
                                                })}

                                            </select>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="main-search-input">
                                                <select data-placeholder="?????? ??????????"
                                                        name="regionName" style={{color: '#888'}}
                                                        id="regionName">
                                                    <option label="?????? ??????????" disabled selected></option>
                                                    {this.state.regionNameList && this.state.regionNameList.map(regionName => {
                                                        return (
                                                            <option key={regionName}>{regionName}</option>
                                                        )
                                                    })}

                                                </select>

                                                <button className="button" onClick={this.searchFile}>?????? ?? ????</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div id='tab1' className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ???????? ????"
                                                       id="fromUnitPrice"/>
                                            </div>

                                        </div>

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ???????? ????"
                                                       id="toUnitPrice"/>
                                            </div>

                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ???? ????"
                                                       id="fromTotalPrice"/>
                                            </div>
                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ???? ????"
                                                       id="toTotalPrice"/>
                                            </div>
                                        </div>

                                    </div>
                                    <div id='tab2' style={{display: "none"}} className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????? ????"
                                                       id="fromMortgage"/>
                                            </div>

                                        </div>

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????? ????"
                                                       id="toMortgage"/>
                                            </div>

                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????????? ????"
                                                       id="fromRent"/>
                                            </div>
                                        </div>


                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????????? ????"
                                                       id="toRent"/>
                                            </div>
                                        </div>

                                    </div>
                                    <div id='tab3' style={{display: "none"}} className="row with-forms">

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????? ???? ????"
                                                       id="fromTotalMortgage"/>
                                            </div>

                                        </div>

                                        <div className="col-md-3">

                                            <div className="range-slider">
                                                <input type="text" className="ico-01"
                                                       placeholder="???????? ?????? ???? ????"
                                                       id="toTotalMortgage"/>
                                            </div>

                                        </div>





                                    </div>

                                    <a href="#" className="more-search-options-trigger margin-top-10"
                                       data-open-title="?????????? ?????? ??????????"
                                       data-close-title="????????"></a>

                                    <div className="more-search-options relative">
                                        <div className="more-search-options-container">

                                            <div className="row with-forms">

                                                <div className="col-md-3">
                                                    <select data-placeholder="?????? ????????"
                                                            className="chosen-select-no-single" name="agePanel"
                                                            id="agePanel">
                                                        <option label="?????? ????????"></option>
                                                        <option>0 ???? 1 ??????</option>
                                                        <option>0 ???? 5 ??????</option>
                                                        <option>0 ???? 10 ??????</option>
                                                        <option>0 ???? 20 ??????</option>
                                                        <option>0 ???? 50 ??????</option>
                                                        <option>?????????? 50 ??????</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-3">
                                                    <select data-placeholder="????????" className="chosen-select-no-single"
                                                            name="roomPanel" id="roomPanel">
                                                        <option label="????????"></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>


                                                <div className="col-md-3">
                                                    <select data-placeholder="????????????????" style={{color: '#888'}}
                                                            name="unitKitchen" id="unitKitchen">
                                                        <option label="????????????????"></option>
                                                        {this.state.configList.kitchenService && this.state.configList.kitchenService.map(kitchenService => {
                                                            return (
                                                                <option>{kitchenService}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="??????" style={{color: '#888'}}
                                                            name="frontKind" id="frontKind">
                                                        <option label="??????"></option>
                                                        {this.state.configList.frontKind && this.state.configList.frontKind.map(frontKind => {
                                                            return (
                                                                <option>{frontKind}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="?????????? ???????? ???? ???? ????????"
                                                            className="chosen-select-no-single" name="numberHousePanel"
                                                            id="numberHousePanel">
                                                        <option label="?????????? ???????? ???? ???? ????????"></option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>6</option>

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="??????"
                                                            style={{color: '#888'}} name="documentKind"
                                                            id="documentKind">
                                                        <option label="??????"></option>
                                                        {this.state.configList.documentKind && this.state.configList.documentKind.map(documentKind => {
                                                            return (
                                                                <option>{documentKind}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="????" style={{color: '#888'}}
                                                            name="floorCovering" id="floorCovering">
                                                        <option label="???? ??????"></option>
                                                        {this.state.configList.floorCovering && this.state.configList.floorCovering.map(floorCovering => {
                                                            return (
                                                                <option key={floorCovering}>{floorCovering}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select data-placeholder="??????"
                                                            style={{color: '#888'}} name="direction"
                                                            id="direction">
                                                        <option label="??????"></option>
                                                        <option>??????????</option>
                                                        <option>??????????</option>
                                                        <option>????????</option>
                                                        <option>????????</option>


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
                            <h1>???????? ????????????</h1>
                            <p>???? ???????? ???????????? ?????????????? ???????? ?????? ???? (???????? ?????????? ?????????? ???? ????????????) ???? ???????? ???????? ?????? , ?????? ??
                                ???????? ???????? ?????? ???????????? ???????????? ???? ?????????? ???? ???????????? ?????? ???????? ???? ????????. ???????????? ???? ???????? ?????????? ????
                                ???????? ?????? ?????????? ???????? ?????? ??????. </p>
                            <h4 className="text-center mb-4">?????????? ???????????? ???????? ???????? ??????????</h4>
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-primary">
                                    <tr>
                                        <th>?????? ????????????</th>
                                        <th>?????? ????????????</th>
                                        <th>????????(??????????)</th>
                                        <th>??????????</th>
                                        <th>???????? ????????????</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>???????? ?? ????????</td>
                                        <td>???? ????????</td>
                                        <td>???? ????????</td>
                                        <td>?? ????????</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>???????? ?? ????????</td>
                                        <td>???? ????????</td>
                                        <td>???? ????????</td>
                                        <td>?? ????????</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>???????? ?? ????????</td>
                                        <td>???? ??????</td>
                                        <td>?????? ????????</td>
                                        <td>?? ????????</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>?????? ?? ??????????</td>
                                        <td>???? ????????</td>
                                        <td>???? ????????</td>
                                        <td>?? ????????</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>?????? ?? ??????????</td>
                                        <td>???? ????????</td>
                                        <td>???? ????????</td>
                                        <td>?? ????????</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">?????? ?? ??????????</td>
                                        <td className="border-bottom-0">???? ??????</td>
                                        <td className="border-bottom-0">?????? ????????</td>
                                        <td className="border-bottom-0">?? ????????</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">???????? ??????????</td>
                                        <td className="border-bottom-0">???? ????????</td>
                                        <td className="border-bottom-0">???? ????????</td>
                                        <td className="border-bottom-0">?? ????????</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">???????? ??????????</td>
                                        <td className="border-bottom-0">???? ????????</td>
                                        <td className="border-bottom-0">???? ????????</td>
                                        <td className="border-bottom-0">?? ????????</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-bottom-0">???????? ??????????</td>
                                        <td className="border-bottom-0">???? ??????</td>
                                        <td className="border-bottom-0">?????? ????????</td>
                                        <td className="border-bottom-0">?? ????????</td>
                                        <td className="border-bottom-0">
                                            <button className="btn btn-primary"
                                                    style={{backgroundColor: '#1C3706', color: 'white'}}>????????
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
                            <h3 className="headline margin-bottom-30 margin-top-40">???????? ??????</h3>
                        </div>

                        <div className="col-md-5">
                            <div className="numbered color ">
                                <ol>
                                    <li>?????????? ?????????? ???????? ???? ?????????? ???? ????????.</li>
                                    <li>???? ???????? ???????????? ???????? ???????? ?????????????? ???? ???????????? ?????? ???????? ???? ????????.</li>
                                    <li>???? ???? ???????????? ???????????? ?????? ???????? ???? ????????.</li>

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
