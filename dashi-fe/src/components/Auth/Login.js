import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants';

import './Auth.css'
import logo from './logo.png';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: null,
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
            .then(res => {
                this.props.setCurrentUser(res.data.id);
                this.props.history.push('/home')
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            <>
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button id="close" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {this.state.errors && this.state.errors.map((e, i) => (
                                <div className="alert alert-danger alert-dismissible fade show" style={{ width: '100%' }} role="alert" key={i}>
                                    {e.message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            ))}
                            <div className="modal-img">
                                <img src={logo}></img>
                            </div>
                            <div className="modal-header">
                                <h4>Log in to Dashi</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password-register" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <button onClick={this.handleSubmit} type="submit" id="modal-login-btn" data-dismiss="modal" className="btn active">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default withRouter(Login);