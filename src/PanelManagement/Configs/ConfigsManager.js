import React, {Component} from 'react'
import './Configs.css';
import Services from "../../utils/Services";
import StringUtils from "../../utils/StringUtils";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import LoginModal from "../components/Modal/LoginModal";

class ConfigsManager extends Component {

    constructor(props) {
        super(props);
        this.isUpdate = false;
        this.state = {
            items: [],
            apartmentList: [],
            apartment: '',
            sourceList: [],
            source: '',
            vilaList: [],
            vila: '',
            buildingList: [],
            building: '',
            oldHouseList: [],
            oldHouse: '',
            officeList: [],
            office: '',
            equipmentsList: [],
            equipments: '',
            documentKindList: [],
            documentKind: '',
            frontKindList: [],
            frontKind: '',
            regionList: [],
            regionName: '',
            regionCode: '',
            regionPriceList: [],
            regionPriceName: '',
            regionPriceCode: '',
            regionPrice: '',
            typeList: [],
            type: '',
            moshakhaseList: [],
            moshakhase: '',
            publisherList: [],
            publisher: '',
            poolList: [],
            pool: '',
            sonaList: [],
            sona: '',
            jakoziList: [],
            jakozi: '',
            blockList: [],
            blockNumber: '',
            isLoading: false,
            isDone: true,
            modalShow: false
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: StringUtils.convertNumbersToEnglish(e.target.value)})
    };

    getItems = () => {
        this.setState({
            isLoading: true,
            isDone: false
        }, () => {
            setTimeout(() => {
                Services.getConfigList().then((response) => {
                    if (response.data === null || response.data === undefined || response.data === [] || response.data.length === 0) {
                        this.isUpdate = false;
                        this.setState({
                            isLoading: false
                        })
                    } else {
                        this.isUpdate = true;
                        this.setState({
                            sourceList: response.data[response.data.length - 1].source ? response.data[response.data.length - 1].source : [],
                            apartmentList: response.data[response.data.length - 1].apartment ? response.data[response.data.length - 1].apartment : [],
                            vilaList: response.data[response.data.length - 1].vila ? response.data[response.data.length - 1].vila : [],
                            buildingList: response.data[response.data.length - 1].building ? response.data[response.data.length - 1].building : [],
                            oldHouseList: response.data[response.data.length - 1].oldHouse ? response.data[response.data.length - 1].oldHouse : [],
                            officeList: response.data[response.data.length - 1].office ? response.data[response.data.length - 1].office : [],
                            equipmentsList: response.data[response.data.length - 1].equipments ? response.data[response.data.length - 1].equipments : [],
                            documentKindList: response.data[response.data.length - 1].documentKind ? response.data[response.data.length - 1].documentKind : [],
                            frontKindList: response.data[response.data.length - 1].frontKind ? response.data[response.data.length - 1].frontKind : [],
                            regionList: response.data[response.data.length - 1].region ? response.data[response.data.length - 1].region : [],
                            regionPriceList: response.data[response.data.length - 1].regionPrice ? response.data[response.data.length - 1].regionPrice : [],
                            typeList: response.data[response.data.length - 1].type ? response.data[response.data.length - 1].type : [],
                            moshakhaseList: response.data[response.data.length - 1].moshakhase ? response.data[response.data.length - 1].moshakhase : [],
                            publisherList: response.data[response.data.length - 1].publisher ? response.data[response.data.length - 1].publisher : [],
                            poolList: response.data[response.data.length - 1].pool ? response.data[response.data.length - 1].pool : [],
                            sonaList: response.data[response.data.length - 1].sona ? response.data[response.data.length - 1].sona : [],
                            jakoziList: response.data[response.data.length - 1].jakozi ? response.data[response.data.length - 1].jakozi : [],
                            blockList: response.data[response.data.length - 1].blackList ? response.data[response.data.length - 1].blackList : [],
                            isLoading: false
                        });
                    }
                    setTimeout(() => {
                        this.setState({isDone: true});
                    }, 1000);
                }).catch((error) => {
                    this.setState({
                        isLoading: false
                    });
                    setTimeout(() => {
                        this.setState({
                            isDone: true,
                            modalShow: true
                        });
                    }, 1000);
                    console.log('error', error)
                });
            }, 2000);
        })
    };

    insertConfigChanges = () => {
        this.setState({
            isLoading: true,
            isDone: false
        }, () => {
            setTimeout(() => {
                Services.insertConfig({
                    source: this.state.sourceList,
                    apartment: this.state.apartmentList,
                    vila: this.state.vilaList,
                    building: this.state.buildingList,
                    oldHouse: this.state.oldHouseList,
                    office: this.state.officeList,
                    equipments: this.state.equipmentsList,
                    documentKind: this.state.documentKindList,
                    frontKind: this.state.frontKindList,
                    region: this.state.regionList,
                    regionPrice: this.state.regionPriceList,
                    type: this.state.typeList,
                    moshakhase: this.state.moshakhaseList,
                    publisher: this.state.publisherList,
                    pool: this.state.poolList,
                    sona: this.state.sonaList,
                    jakozi: this.state.jakoziList,
                    blackList: this.state.blockList,
                }).then((response) => {
                    this.setState({isLoading: false});
                    setTimeout(() => {
                        this.setState({isDone: true});
                    }, 1000);
                }).catch((error) => {
                    this.setState({
                        isLoading: false
                    });
                    setTimeout(() => {
                        this.setState({
                            isDone: true,
                            modalShow: true
                        });
                    }, 1000);
                    console.log('error', error)
                });
            }, 2000);
        })
    };

    updateConfigChanges = () => {
        this.setState({
            isLoading: true,
            isDone: false
        }, () => {
            setTimeout(() => {
                Services.editConfig({
                    source: this.state.sourceList,
                    apartment: this.state.apartmentList,
                    vila: this.state.vilaList,
                    building: this.state.buildingList,
                    oldHouse: this.state.oldHouseList,
                    office: this.state.officeList,
                    equipments: this.state.equipmentsList,
                    documentKind: this.state.documentKindList,
                    frontKind: this.state.frontKindList,
                    region: this.state.regionList,
                    regionPrice: this.state.regionPriceList,
                    type: this.state.typeList,
                    moshakhase: this.state.moshakhaseList,
                    publisher: this.state.publisherList,
                    pool: this.state.poolList,
                    sona: this.state.sonaList,
                    jakozi: this.state.jakoziList,
                    blackList: this.state.blockList,
                }).then((response) => {
                    this.setState({isLoading: false});
                    setTimeout(() => {
                        this.setState({isDone: true});
                    }, 1000);
                }).catch((error) => {
                    this.setState({
                        isLoading: false
                    });
                    setTimeout(() => {
                        this.setState({
                            isDone: true,
                            modalShow: true
                        });
                    }, 1000);
                    console.log('error', error)
                });
            }, 2000);
        })
    };

    componentDidMount() {
        this.getItems()
    }

    openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    onSuccessLogin = () => {
        this.setState({
            modalShow: false
        }, () => {
            this.getItems()
        })
    };

    onErrorLogin = () => {

    };

    render() {
        let {isLoading, isDone} = this.state;
        return (
            <>
                <LoginModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({
                        modalShow: false
                    })}
                    onSuccessLogin={this.onSuccessLogin}
                    onErrorLogin={this.onErrorLogin}/>
                {isDone && !isLoading ?
                    <div className="container" style={{marginTop: 50, width: "100%"}}>

                        <div className="tab">
                            <button className="tablinks active"
                                    onClick={(event) => this.openCity(event, 'source')}>???????? ????????????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'apartment')}>????????????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'vila')}>????????</button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'building')}>??????????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'oldHouse')}>??????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'office')}>??????????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'equipments')}>??????????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'documentKind')}>??????????
                                ??????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'frontKind')}>??????</button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'region')}>??????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'regionPrice')}>???????? ??????????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'type')}>?????? ??????
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'moshakhase')}>??????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'publisher')}>?????????? ??????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'pool')}>??????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'sona')}>????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'jakozi')}>??????????
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'blockList')}>?????????? ?????? ????????????
                            </button>
                        </div>
                        <div id="source" className="tabcontent" style={{display: 'block'}}>
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="source" className="form-control text-input"
                                                   value={this.state.source}
                                                   placeholder="???????? ????????????????" id="source" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.source !== '') {
                                                                this.state.sourceList.push(this.state.source);
                                                                this.setState({
                                                                    sourceList: this.state.sourceList,
                                                                    source: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.sourceList.map((source) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={source}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.sourceList = this.state.sourceList.filter(item => item !== source);
                                                                        this.setState({
                                                                            sourceList: this.state.sourceList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="apartment" className="tabcontent" style={{display: 'none'}}>
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="apartment" className="form-control text-input"
                                                   value={this.state.apartment}
                                                   placeholder="?????? ????????????????" id="apartment" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.apartment !== '') {
                                                                this.state.apartmentList.push(this.state.apartment);
                                                                this.setState({
                                                                    apartmentList: this.state.apartmentList,
                                                                    apartment: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.apartmentList.map((apartment) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={apartment}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.apartmentList = this.state.apartmentList.filter(item => item !== apartment);
                                                                        this.setState({
                                                                            apartmentList: this.state.apartmentList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="vila" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="vila" className="form-control text-input"
                                                   value={this.state.vila}
                                                   placeholder="?????? ????????" id="vila" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.vila !== '') {
                                                                this.state.vilaList.push(this.state.vila);
                                                                this.setState({
                                                                    vilaList: this.state.vilaList,
                                                                    vila: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.vilaList.map((vila) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               value={vila} disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.vilaList = this.state.vilaList.filter(item => item !== vila);
                                                                        this.setState({
                                                                            vilaList: this.state.vilaList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="building" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="building" className="form-control text-input"
                                                   value={this.state.building}
                                                   placeholder="?????? ??????????????" id="building" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.building !== '') {
                                                                this.state.buildingList.push(this.state.building);
                                                                this.setState({
                                                                    buildingList: this.state.buildingList,
                                                                    building: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.buildingList.map((building) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={building}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.buildingList = this.state.buildingList.filter(item => item !== building);
                                                                        this.setState({
                                                                            buildingList: this.state.buildingList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="oldHouse" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="oldHouse" className="form-control text-input"
                                                   value={this.state.oldHouse}
                                                   placeholder="?????? ??????????" id="oldHouse" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.oldHouse !== '') {
                                                                this.state.oldHouseList.push(this.state.oldHouse);
                                                                this.setState({
                                                                    oldHouseList: this.state.oldHouseList,
                                                                    oldHouse: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.oldHouseList.map((oldHouse) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={oldHouse}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.oldHouseList = this.state.oldHouseList.filter(item => item !== oldHouse);
                                                                        this.setState({
                                                                            oldHouseList: this.state.oldHouseList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="office" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="office" className="form-control text-input"
                                                   value={this.state.office}
                                                   placeholder="?????? ??????????????" id="office" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.office !== '') {
                                                                this.state.officeList.push(this.state.office);
                                                                this.setState({
                                                                    officeList: this.state.officeList,
                                                                    office: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.officeList.map((office) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={office}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.officeList = this.state.officeList.filter(item => item !== office);
                                                                        this.setState({
                                                                            officeList: this.state.officeList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="equipments" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="equipments" className="form-control text-input"
                                                   value={this.state.equipments}
                                                   placeholder="?????? ??????????????" id="equipments" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.equipments !== '') {
                                                                this.state.equipmentsList.push(this.state.equipments);
                                                                this.setState({
                                                                    equipmentsList: this.state.equipmentsList,
                                                                    equipments: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.equipmentsList.map((equipments) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={equipments}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.equipmentsList = this.state.equipmentsList.filter(item => item !== equipments);
                                                                        this.setState({
                                                                            equipmentsList: this.state.equipmentsList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="documentKind" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="documentKind" className="form-control text-input"
                                                   value={this.state.documentKind}
                                                   placeholder="?????? ?????????? ??????" id="documentKind"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.documentKind !== '') {
                                                                this.state.documentKindList.push(this.state.documentKind);
                                                                this.setState({
                                                                    documentKindList: this.state.documentKindList,
                                                                    documentKind: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.documentKindList.map((documentKind) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={documentKind}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.documentKindList = this.state.documentKindList.filter(item => item !== documentKind);
                                                                        this.setState({
                                                                            documentKindList: this.state.documentKindList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="frontKind" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="frontKind" className="form-control text-input"
                                                   value={this.state.frontKind}
                                                   placeholder="?????? ??????" id="frontKind" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.frontKind !== '') {
                                                                this.state.frontKindList.push(this.state.frontKind);
                                                                this.setState({
                                                                    frontKindList: this.state.frontKindList,
                                                                    frontKind: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.frontKindList.map((frontKind) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={frontKind}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.frontKindList = this.state.frontKindList.filter(item => item !== frontKind);
                                                                        this.setState({
                                                                            frontKindList: this.state.frontKindList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="region" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more" style={{display: 'flex'}}>
                                            <input type="text" name="regionName" className="form-control text-input"
                                                   value={this.state.regionName}
                                                   placeholder="?????? ??????????" id="regionName" onChange={this.onChange} style={{width: '75%'}}/>
                                            <input type="text" name="regionCode" className="form-control text-input"
                                                   value={this.state.regionCode}
                                                   placeholder="???? ??????????" id="regionCode" onChange={this.onChange} style={{width: '15%'}}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.regionName !== '' && this.state.regionCode) {
                                                                let region = {regionName: this.state.regionName, regionCode: this.state.regionCode};
                                                                this.state.regionList.push(region);
                                                                this.setState({
                                                                    regionList: this.state.regionList,
                                                                    regionCode: '',
                                                                    regionName: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.regionList.map((region) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10, display: 'flex'}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={region.regionName}
                                                               disabled={true} style={{width: '75%'}}/>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={region.regionCode}
                                                               disabled={true} style={{width: '15%'}}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.regionList = this.state.regionList.filter(item => item !== region);
                                                                        this.setState({
                                                                            regionList: this.state.regionList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="regionPrice" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more" style={{display: 'flex'}}>
                                            <input type="text" name="regionPrice" className="form-control text-input"
                                                   value={this.state.regionPrice}
                                                   placeholder="???????? ??????????" id="regionPrice" onChange={this.onChange} style={{width: '30%'}}/>
                                            <input type="text" name="regionPriceName" className="form-control text-input"
                                                   value={this.state.regionPriceName}
                                                   placeholder="?????? ??????????" id="regionPriceName" onChange={this.onChange} style={{width: '45%'}}/>
                                            <input type="text" name="regionPriceCode" className="form-control text-input"
                                                   value={this.state.regionPriceCode}
                                                   placeholder="???? ??????????" id="regionPriceCode" onChange={this.onChange} style={{width: '15%'}}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.regionPriceName !== '' && this.state.regionPriceCode && this.state.regionPrice) {
                                                                let region = {
                                                                    regionName: this.state.regionPriceName,
                                                                    regionCode: this.state.regionPriceCode,
                                                                    regionPrice: this.state.regionPrice
                                                                };
                                                                this.state.regionPriceList.push(region);
                                                                this.setState({
                                                                    regionPriceList: this.state.regionPriceList,
                                                                    regionPriceCode: '',
                                                                    regionPriceName: '',
                                                                    regionPrice: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.regionPriceList.map((region) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10, display: 'flex'}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={region.regionPrice}
                                                               disabled={true} style={{width: '30%'}}/>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={region.regionName}
                                                               disabled={true} style={{width: '45%'}}/>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={region.regionCode}
                                                               disabled={true} style={{width: '15%'}}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.regionPriceList = this.state.regionPriceList.filter(item => item !== region);
                                                                        this.setState({
                                                                            regionPriceList: this.state.regionPriceList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="type" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="type" className="form-control text-input"
                                                   value={this.state.type}
                                                   placeholder="?????? ??????" id="type" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.type !== '') {
                                                                this.state.typeList.push(this.state.type);
                                                                this.setState({
                                                                    typeList: this.state.typeList,
                                                                    type: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.typeList.map((type) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={type}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.typeList = this.state.typeList.filter(item => item !== type);
                                                                        this.setState({
                                                                            typeList: this.state.typeList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="moshakhase" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="moshakhase" className="form-control text-input"
                                                   value={this.state.moshakhase}
                                                   placeholder="?????? ??????????" id="moshakhase" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.moshakhase !== '') {
                                                                this.state.moshakhaseList.push(this.state.moshakhase);
                                                                this.setState({
                                                                    moshakhaseList: this.state.moshakhaseList,
                                                                    moshakhase: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.moshakhaseList.map((moshakhase) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={moshakhase}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.moshakhaseList = this.state.moshakhaseList.filter(item => item !== moshakhase);
                                                                        this.setState({
                                                                            moshakhaseList: this.state.moshakhaseList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="publisher" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="publisher" className="form-control text-input"
                                                   value={this.state.publisher}
                                                   placeholder="?????? ?????????? ??????????" id="publisher"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.publisher !== '') {
                                                                this.state.publisherList.push(this.state.publisher);
                                                                this.setState({
                                                                    publisherList: this.state.publisherList,
                                                                    publisher: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.publisherList.map((publisher) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={publisher}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.publisherList = this.state.publisherList.filter(item => item !== publisher);
                                                                        this.setState({
                                                                            publisherList: this.state.publisherList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="pool" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="pool" className="form-control text-input"
                                                   value={this.state.pool}
                                                   placeholder="?????? ?????????? ??????????" id="pool"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.pool !== '') {
                                                                this.state.poolList.push(this.state.pool);
                                                                this.setState({
                                                                    poolList: this.state.poolList,
                                                                    pool: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.poolList.map((pool) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={pool}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.poolList = this.state.poolList.filter(item => item !== pool);
                                                                        this.setState({
                                                                            poolList: this.state.poolList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="sona" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="sona" className="form-control text-input"
                                                   value={this.state.sona}
                                                   placeholder="?????? ?????????? ??????????" id="sona"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.sona !== '') {
                                                                this.state.sonaList.push(this.state.sona);
                                                                this.setState({
                                                                    sonaList: this.state.sonaList,
                                                                    sona: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.sonaList.map((sona) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={sona}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.sonaList = this.state.sonaList.filter(item => item !== sona);
                                                                        this.setState({
                                                                            sonaList: this.state.sonaList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="jakozi" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="jakozi" className="form-control text-input"
                                                   value={this.state.jakozi}
                                                   placeholder="?????? ?????????? ??????????" id="jakozi"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.jakozi !== '') {
                                                                this.state.jakoziList.push(this.state.jakozi);
                                                                this.setState({
                                                                    jakoziList: this.state.jakoziList,
                                                                    jakozi: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.jakoziList.map((jakozi) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={jakozi}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.jakoziList = this.state.jakoziList.filter(item => item !== jakozi);
                                                                        this.setState({
                                                                            jakoziList: this.state.jakoziList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>
                        <div id="blockList" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="blockNumber" className="form-control text-input"
                                                   value={this.state.blockNumber}
                                                   placeholder="?????????? ?????? ????????????" id="blockList"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.blockList !== '') {
                                                                this.state.blockList.push(this.state.blockNumber);
                                                                this.setState({
                                                                    blockList: this.state.blockList,
                                                                    blockNumber: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> ????????????
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.blockList.map((blockNumber) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={blockNumber}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.blockList = this.state.blockList.filter(item => item !== blockNumber);
                                                                        this.setState({
                                                                            blockList: this.state.blockList
                                                                        })
                                                                    }}><i
                                                                className="glyphicon glyphicon-remove"></i> ??????
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </form>


                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                            <button className="btn btn-success" type="button"
                                    onClick={this.isUpdate ? this.updateConfigChanges : this.insertConfigChanges}>
                                ??????
                            </button>
                        </div>

                    </div> :
                    <ScreenLoading
                        loading={isLoading}
                        done={isDone}/>
                }
            </>
        )
    }
}

export default ConfigsManager
