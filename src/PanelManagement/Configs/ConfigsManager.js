import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modals/Modal'
import DataTable from './Tables/DataTable'
import { CSVLink } from "react-csv"
import './Configs.css';
import Services from "../../utils/Services";
import ScreenLoading from "../../components/screenLoading/ScreenLoading";
import $ from 'jquery';

class ConfigsManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            apartemanList: [],
            aparteman: '',
            isLoading: false,
            isDone: true
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
                Services.getUsersList().then((response) => {
                    this.setState({
                        items: response.data,
                        isLoading: false
                    });
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

    addItemToState = (item) => {
        item.id = this.state.items.length + 1;
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.id === item.id)
        const newArray = [
            // destructure all items from beginning to the indexed item
            ...this.state.items.slice(0, itemIndex),
            // add the updated item to the array
            item,
            // add the rest of the items to the array from the index after the replaced item
            ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({ items: newArray })
    }

    deleteItemFromState = (username) => {
        Services.deleteUser({username: username}).then((response) => {
            const updatedItems = this.state.items.filter(item => item.username !== username)
            this.setState({items: updatedItems})
        }).catch((error) => {
            console.log('error is:', error)
        });
    }

    componentDidMount(){
        //this.getItems()
    }

    render() {
        let {isLoading, isDone} = this.state;
        return (
            <>
                {isDone && !isLoading ?
                    <div className="container" style={{marginTop: 50}}>
                        <div className="panel panel-default">
                            <div className="panel-heading">نوع آپارتمان</div>
                            <div className="panel-body">


                                <form action="action.php">


                                    <div className="input-group control-group after-add-more">
                                        <input type="text" name="aparteman" className="form-control text-input" value={this.state.aparteman}
                                               placeholder="نوع آپارتمان" id="aparteman" onChange={this.onChange}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-success add-more" type="button" onClick={() => {
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
                                        return(
                                            <div className="copy">
                                                <div className="control-group input-group" style={{marginTop:10}}>
                                                    <input type="text" name="addmore[]" className="form-control text-input"
                                                           placeholder="Enter Name Here" value={aparteman} disabled={true}/>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-danger remove" type="button" onClick={() => {
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


                                <div className="copy hide">
                                    <div className="control-group input-group" style={{marginTop:10}}>
                                        <input type="text" name="addmore[]" className="form-control"
                                               placeholder="Enter Name Here"/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-danger remove" type="button"><i
                                                    className="glyphicon glyphicon-remove"></i> Remove
                                                </button>
                                            </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>:
                    <ScreenLoading
                        loading={isLoading}
                        done={isDone}/>
                }
            </>
        )
    }
}

export default ConfigsManager
