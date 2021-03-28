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
            apartemanList: [],
            aparteman: '',
            vilaList: [],
            vila: '',
            mosteghelatList: [],
            mosteghelat: '',
            kharejiList: [],
            khareji: '',
            kolangiList: [],
            kolangi: '',
            dafterekarList: [],
            dafterekar: '',
            emkanatList: [],
            emkanat: '',
            vaziyatsanadList: [],
            vaziyatsanad: '',
            manbaetelatiList: [],
            manbaetelati: '',
            namaList: [],
            nama: '',
            mantagheList: [],
            mantaghe: '',
            noemelkList: [],
            noemelk: '',
            moshakhaseList: [],
            moshakhase: '',
            manbaList: [],
            manba: '',
            tanzimkonandeList: [],
            tanzimkonande: '',
            codeList: [],
            code: '',
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
                            apartemanList: response.data[response.data.length - 1].aparteman ? response.data[response.data.length - 1].aparteman : [],
                            vilaList: response.data[response.data.length - 1].vila ? response.data[response.data.length - 1].vila : [],
                            mosteghelatList: response.data[response.data.length - 1].mosteghelat ? response.data[response.data.length - 1].mosteghelat : [],
                            kharejiList: response.data[response.data.length - 1].khareji ? response.data[response.data.length - 1].khareji : [],
                            kolangiList: response.data[response.data.length - 1].kolangi ? response.data[response.data.length - 1].kolangi : [],
                            dafterekarList: response.data[response.data.length - 1].dafterekar ? response.data[response.data.length - 1].dafterekar : [],
                            emkanatList: response.data[response.data.length - 1].emkanat ? response.data[response.data.length - 1].emkanat : [],
                            vaziyatsanadList: response.data[response.data.length - 1].vaziyatsanad ? response.data[response.data.length - 1].vaziyatsanad : [],
                            manbaetelatiList: response.data[response.data.length - 1].manbaetelati ? response.data[response.data.length - 1].manbaetelati : [],
                            namaList: response.data[response.data.length - 1].nama ? response.data[response.data.length - 1].nama : [],
                            mantagheList: response.data[response.data.length - 1].mantaghe ? response.data[response.data.length - 1].mantaghe : [],
                            noemelkList: response.data[response.data.length - 1].noemelk ? response.data[response.data.length - 1].noemelk : [],
                            moshakhaseList: response.data[response.data.length - 1].moshakhase ? response.data[response.data.length - 1].moshakhase : [],
                            manbaList: response.data[response.data.length - 1].manba ? response.data[response.data.length - 1].manba : [],
                            tanzimkonandeList: response.data[response.data.length - 1].tanzimkonande ? response.data[response.data.length - 1].tanzimkonande : [],
                            codeList: response.data[response.data.length - 1].code ? response.data[response.data.length - 1].code : [],
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
                    aparteman: this.state.apartemanList,
                    vila: this.state.vilaList,
                    mosteghelat: this.state.mosteghelatList,
                    khareji: this.state.kharejiList,
                    kolangi: this.state.kolangiList,
                    dafterekar: this.state.dafterekarList,
                    emkanat: this.state.emkanatList,
                    vaziyatsanad: this.state.vaziyatsanadList,
                    manbaetelati: this.state.manbaetelatiList,
                    nama: this.state.namaList,
                    mantaghe: this.state.mantagheList,
                    noemelk: this.state.noemelkList,
                    moshakhase: this.state.moshakhaseList,
                    manba: this.state.manbaList,
                    tanzimkonande: this.state.tanzimkonandeList,
                    code: this.state.codeList,
                    isLoading: false
                }).then((response) => {
                    window.location.reload();
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
                    aparteman: this.state.apartemanList,
                    vila: this.state.vilaList,
                    mosteghelat: this.state.mosteghelatList,
                    khareji: this.state.kharejiList,
                    kolangi: this.state.kolangiList,
                    dafterekar: this.state.dafterekarList,
                    emkanat: this.state.emkanatList,
                    vaziyatsanad: this.state.vaziyatsanadList,
                    manbaetelati: this.state.manbaetelatiList,
                    nama: this.state.namaList,
                    mantaghe: this.state.mantagheList,
                    noemelk: this.state.noemelkList,
                    moshakhase: this.state.moshakhaseList,
                    manba: this.state.manbaList,
                    tanzimkonande: this.state.tanzimkonandeList,
                    code: this.state.codeList,
                    isLoading: false
                }).then((response) => {
                    window.location.reload();
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
                                    onClick={(event) => this.openCity(event, 'aparteman')}>آپارتمان
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'vila')}>ویلا</button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'mosteghelat')}>مستغلات
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'khareji')}>خارجی
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'kolangi')}>کلنگی
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'dafterekar')}>دفترکار
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'emkanat')}>امکانات
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'vaziyatsanad')}>وضعیت
                                سند
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'manbaetelati')}>منبع
                                اطلاعاتی
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'nama')}>نما</button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'mantaghe')}>منطقه
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'noemelk')}>نوع ملک
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'moshakhase')}>مشخصه
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'manba')}>منبع
                            </button>
                            <button className="tablinks"
                                    onClick={(event) => this.openCity(event, 'tanzimkonande')}>تنظیم کننده
                            </button>
                            <button className="tablinks" onClick={(event) => this.openCity(event, 'code')}>کد</button>
                        </div>
                        <div id="aparteman" className="tabcontent" style={{display: 'block'}}>
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="aparteman" className="form-control text-input"
                                                   value={this.state.aparteman}
                                                   placeholder="نوع آپارتمان" id="aparteman" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.aparteman !== '') {
                                                                this.state.apartemanList.push(this.state.aparteman);
                                                                this.setState({
                                                                    apartemanList: this.state.apartemanList,
                                                                    aparteman: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.apartemanList.map((aparteman) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={aparteman}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.apartemanList = this.state.apartemanList.filter(item => item !== aparteman);
                                                                        this.setState({
                                                                            apartemanList: this.state.apartemanList
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
                        <div id="mosteghelat" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="mosteghelat" className="form-control text-input"
                                                   value={this.state.mosteghelat}
                                                   placeholder="نوع مستغلات" id="mosteghelat" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.mosteghelat !== '') {
                                                                this.state.mosteghelatList.push(this.state.mosteghelat);
                                                                this.setState({
                                                                    mosteghelatList: this.state.mosteghelatList,
                                                                    mosteghelat: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.mosteghelatList.map((mosteghelat) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={mosteghelat}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.mosteghelatList = this.state.mosteghelatList.filter(item => item !== mosteghelat);
                                                                        this.setState({
                                                                            mosteghelatList: this.state.mosteghelatList
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
                        <div id="khareji" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="khareji" className="form-control text-input"
                                                   value={this.state.khareji}
                                                   placeholder="نوع خارجی" id="khareji" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.khareji !== '') {
                                                                this.state.kharejiList.push(this.state.khareji);
                                                                this.setState({
                                                                    kharejiList: this.state.kharejiList,
                                                                    khareji: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.kharejiList.map((khareji) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={khareji}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.kharejiList = this.state.kharejiList.filter(item => item !== khareji);
                                                                        this.setState({
                                                                            kharejiList: this.state.kharejiList
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
                        <div id="kolangi" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="kolangi" className="form-control text-input"
                                                   value={this.state.kolangi}
                                                   placeholder="نوع کلنگی" id="kolangi" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.kolangi !== '') {
                                                                this.state.kolangiList.push(this.state.kolangi);
                                                                this.setState({
                                                                    kolangiList: this.state.kolangiList,
                                                                    kolangi: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.kolangiList.map((kolangi) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={kolangi}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.kolangiList = this.state.kolangiList.filter(item => item !== kolangi);
                                                                        this.setState({
                                                                            kolangiList: this.state.kolangiList
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
                        <div id="dafterekar" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="dafterekar" className="form-control text-input"
                                                   value={this.state.dafterekar}
                                                   placeholder="نوع دفترکار" id="dafterekar" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.dafterekar !== '') {
                                                                this.state.dafterekarList.push(this.state.dafterekar);
                                                                this.setState({
                                                                    dafterekarList: this.state.dafterekarList,
                                                                    dafterekar: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.dafterekarList.map((dafterekar) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={dafterekar}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.dafterekarList = this.state.dafterekarList.filter(item => item !== dafterekar);
                                                                        this.setState({
                                                                            dafterekarList: this.state.dafterekarList
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
                        <div id="emkanat" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="emkanat" className="form-control text-input"
                                                   value={this.state.emkanat}
                                                   placeholder="نوع امکانات" id="emkanat" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.emkanat !== '') {
                                                                this.state.emkanatList.push(this.state.emkanat);
                                                                this.setState({
                                                                    emkanatList: this.state.emkanatList,
                                                                    emkanat: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.emkanatList.map((emkanat) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={emkanat}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.emkanatList = this.state.emkanatList.filter(item => item !== emkanat);
                                                                        this.setState({
                                                                            emkanatList: this.state.emkanatList
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
                        <div id="vaziyatsanad" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="vaziyatsanad" className="form-control text-input"
                                                   value={this.state.vaziyatsanad}
                                                   placeholder="نوع وضعیت سند" id="vaziyatsanad"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.vaziyatsanad !== '') {
                                                                this.state.vaziyatsanadList.push(this.state.vaziyatsanad);
                                                                this.setState({
                                                                    vaziyatsanadList: this.state.vaziyatsanadList,
                                                                    vaziyatsanad: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.vaziyatsanadList.map((vaziyatsanad) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={vaziyatsanad}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.vaziyatsanadList = this.state.vaziyatsanadList.filter(item => item !== vaziyatsanad);
                                                                        this.setState({
                                                                            vaziyatsanadList: this.state.vaziyatsanadList
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
                        <div id="manbaetelati" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="manbaetelati" className="form-control text-input"
                                                   value={this.state.manbaetelati}
                                                   placeholder="نوع منبع اطلاعاتی" id="manbaetelati"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.manbaetelati !== '') {
                                                                this.state.manbaetelatiList.push(this.state.manbaetelati);
                                                                this.setState({
                                                                    manbaetelatiList: this.state.manbaetelatiList,
                                                                    manbaetelati: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.manbaetelatiList.map((manbaetelati) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={manbaetelati}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.manbaetelatiList = this.state.manbaetelatiList.filter(item => item !== manbaetelati);
                                                                        this.setState({
                                                                            manbaetelatiList: this.state.manbaetelatiList
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
                        <div id="nama" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="nama" className="form-control text-input"
                                                   value={this.state.nama}
                                                   placeholder="نوع نما" id="nama" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.nama !== '') {
                                                                this.state.namaList.push(this.state.nama);
                                                                this.setState({
                                                                    namaList: this.state.namaList,
                                                                    nama: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.namaList.map((nama) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={nama}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.namaList = this.state.namaList.filter(item => item !== nama);
                                                                        this.setState({
                                                                            namaList: this.state.namaList
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
                        <div id="mantaghe" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="mantaghe" className="form-control text-input"
                                                   value={this.state.mantaghe}
                                                   placeholder="نوع منطقه" id="mantaghe" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.mantaghe !== '') {
                                                                this.state.mantagheList.push(this.state.mantaghe);
                                                                this.setState({
                                                                    mantagheList: this.state.mantagheList,
                                                                    mantaghe: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.mantagheList.map((mantaghe) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={mantaghe}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.mantagheList = this.state.mantagheList.filter(item => item !== mantaghe);
                                                                        this.setState({
                                                                            mantagheList: this.state.mantagheList
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
                        <div id="noemelk" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="noemelk" className="form-control text-input"
                                                   value={this.state.noemelk}
                                                   placeholder="نوع ملک" id="noemelk" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.noemelk !== '') {
                                                                this.state.noemelkList.push(this.state.noemelk);
                                                                this.setState({
                                                                    noemelkList: this.state.noemelkList,
                                                                    noemelk: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.noemelkList.map((noemelk) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={noemelk}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.noemelkList = this.state.noemelkList.filter(item => item !== noemelk);
                                                                        this.setState({
                                                                            noemelkList: this.state.noemelkList
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
                        <div id="manba" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="manba" className="form-control text-input"
                                                   value={this.state.manba}
                                                   placeholder="نوع منبع" id="manba" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.manba !== '') {
                                                                this.state.manbaList.push(this.state.manba);
                                                                this.setState({
                                                                    manbaList: this.state.manbaList,
                                                                    manba: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.manbaList.map((manba) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={manba}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.manbaList = this.state.manbaList.filter(item => item !== manba);
                                                                        this.setState({
                                                                            manbaList: this.state.manbaList
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
                        <div id="tanzimkonande" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="tanzimkonande" className="form-control text-input"
                                                   value={this.state.tanzimkonande}
                                                   placeholder="نوع تنظیم کننده" id="tanzimkonande"
                                                   onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.tanzimkonande !== '') {
                                                                this.state.tanzimkonandeList.push(this.state.tanzimkonande);
                                                                this.setState({
                                                                    tanzimkonandeList: this.state.tanzimkonandeList,
                                                                    tanzimkonande: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.tanzimkonandeList.map((tanzimkonande) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={tanzimkonande}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.tanzimkonandeList = this.state.tanzimkonandeList.filter(item => item !== tanzimkonande);
                                                                        this.setState({
                                                                            tanzimkonandeList: this.state.tanzimkonandeList
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
                        <div id="code" className="tabcontent">
                            <div className="panel panel-default">

                                <div className="panel-body">


                                    <form action="action.php">


                                        <div className="input-group control-group after-add-more">
                                            <input type="text" name="code" className="form-control text-input"
                                                   value={this.state.code}
                                                   placeholder="نوع کد" id="code" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button"
                                                        onClick={() => {
                                                            if (this.state.code !== '') {
                                                                this.state.codeList.push(this.state.code);
                                                                this.setState({
                                                                    codeList: this.state.codeList,
                                                                    code: ''
                                                                })
                                                            }
                                                        }
                                                        }><i
                                                    className="glyphicon glyphicon-plus"></i> افزودن
                                                </button>
                                            </div>
                                        </div>
                                        {this.state.codeList.map((code) => {
                                            return (
                                                <div className="copy">
                                                    <div className="control-group input-group" style={{marginTop: 10}}>
                                                        <input type="text" name="addmore[]"
                                                               className="form-control text-input"
                                                               placeholder="Enter Name Here" value={code}
                                                               disabled={true}/>
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-danger remove" type="button"
                                                                    onClick={() => {
                                                                        this.state.codeList = this.state.codeList.filter(item => item !== code);
                                                                        this.setState({
                                                                            codeList: this.state.codeList
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
