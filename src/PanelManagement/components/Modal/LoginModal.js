import * as React from "react";
import {Modal, Button} from 'react-bootstrap';
import './LoginModal.css';
import Services from "../../../utils/Services";

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            username: '',
            password: '',
            isRegister: false,
            registerUsername: '',
            registerPassword: '',
            registerEmail: '',
            registerPhoneNumber: '',
            registerBirthday: '',
            registerAddress: '',
        }
    }

    onChangeUsernameInput = (evt) => {
        this.setState({
            username: evt.target.value
        });
    };

    onChangePasswordInput = (evt) => {
        this.setState({
            password: evt.target.value
        });
    };

    submitLogin = (e) => {
        e.preventDefault();
        Services.signIn({username: this.state.username, password: this.state.password}).then((res) => {
            this.props.onSuccessLogin(res.data);
        }).catch((error) => {
            this.props.onErrorLogin(error);
        })
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    close = () => {
        this.setState({showModal: false});
    };

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                animation={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>

                    <div className="modalContainer">

                        <div className="modal-login">
                            <div className="modal-logo">
                                <img src={require("../../../market/image/logol.png")} alt="Logo" width={200}/>
                            </div>
                            <div className="modalContent">
                                <div className="modalBody">

                                    <div className="form-group">
                                        <div className="input-group input-group-container">
                                            <img src={require("../../../market/image/message-icon-000000-33.jpg")}
                                                 style={{marginLeft: 5}}/>
                                            <input type="text" className="form-control" name="username"
                                                   placeholder="                               نام کاربری"
                                                   required="required"
                                                   value={this.state.username}
                                                   onChange={this.onChangeUsernameInput}/>
                                        </div>
                                    </div>
                                    < div className="form-group">
                                        <div className="input-group input-group-container">
                                            <img src={require("../../../market/image/lock-32.jpg")}
                                                 style={{marginLeft: 5}}/>
                                            <input type="password" className="form-control" name="password"
                                                   placeholder="                                رمز عبور"
                                                   required="required"
                                                   value={this.state.password}
                                                   onChange={this.onChangePasswordInput}/>
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block btn-lg"
                                                onClick={this.submitLogin}>ورود
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default LoginModal;
