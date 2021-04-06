import React, {Component} from 'react'
import './Configs.css';
import Services from "../../utils/Services";
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
            isLoading: false,
            isDone: true,
            modalShow: true
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
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
                            typeList: response.data[response.data.length - 1].type ? response.data[response.data.length - 1].type : [],
                            moshakhaseList: response.data[response.data.length - 1].moshakhase ? response.data[response.data.length - 1].moshakhase : [],
                            publisherList: response.data[response.data.length - 1].publisher ? response.data[response.data.length - 1].publisher : [],
                            poolList: response.data[response.data.length - 1].pool ? response.data[response.data.length - 1].pool : [],
                            sonaList: response.data[response.data.length - 1].sona ? response.data[response.data.length - 1].sona : [],
                            jakoziList: response.data[response.data.length - 1].jakozi ? response.data[response.data.length - 1].jakozi : [],
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
                        this.setState({isDone: true});
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
                    type: this.state.typeList,
                    moshakhase: this.state.moshakhaseList,
                    publisher: this.state.publisherList,
                    pool: this.state.poolList,
                    sona: this.state.sonaList,
                    jakozi: this.state.jakoziList,
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
                        this.setState({isDone: true});
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
                    type: this.state.typeList,
                    moshakhase: this.state.moshakhaseList,
                    publisher: this.state.publisherList,
                    pool: this.state.poolList,
                    sona: this.state.sonaList,
                    jakozi: this.state.jakoziList,
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
                        this.setState({isDone: true});
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
                                    onClick={(event) => this.openCity(event, 'source')}>منبع اطلاعاتی
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'apartment')}>آپارتمان
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'vila')}>ویلا</button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'building')}>مستغلات
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'oldHouse')}>کلنگی
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'office')}>دفترکار
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'equipments')}>امکانات
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'documentKind')}>وضعیت
                                سند
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'frontKind')}>نما</button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'region')}>منطقه
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'type')}>نوع ملک
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'moshakhase')}>مشخصه
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'publisher')}>تنظیم کننده
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'pool')}>استخر
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'sona')}>سونا
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'jakozi')}>جکوزی
                            </button>
                        </div>
                        <div id="source" className="tabcontent" style={{display: 'block'}}>
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="source" className="form-control text-input"
                                                   value={this.state.source}
                                                   placeholder="منبع اطلاعاتی" id="source" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع آپارتمان" id="apartment" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع ویلا" id="vila" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع مستغلات" id="building" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع کلنگی" id="oldHouse" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع دفترکار" id="office" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع امکانات" id="equipments" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع وضعیت سند" id="documentKind"
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع نما" id="frontKind" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="اسم منطقه" id="regionName" onChange={this.onChange} style={{width: '75%'}}/>
                                            <input type="text" name="regionCode" className="form-control text-input"
                                                   value={this.state.regionCode}
                                                   placeholder="کد منطقه" id="regionCode" onChange={this.onChange} style={{width: '15%'}}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع ملک" id="type" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع مشخصه" id="moshakhase" onChange={this.onChange}/>
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع تنظیم کننده" id="publisher"
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع تنظیم کننده" id="pool"
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع تنظیم کننده" id="sona"
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                                   placeholder="نوع تنظیم کننده" id="jakozi"
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
                                                    className="glyphicon glyphicon-plus"></i> افزودن
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
                                                                className="glyphicon glyphicon-remove"></i> حذف
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
                                ثبت
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
