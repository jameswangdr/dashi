import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../constants';

import './Auth.css';
import logo from './logo.png';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        errors: null,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }
        axios.post(`${API_URL}/auth/register`, newUser)
            .then(res => {
                axios.post(`${API_URL}/auth/login`, newUser, { withCredentials: true })
            .then(res => {
                this.props.setCurrentUser(res.data.id, res.data.username);
                this.props.history.push('/home')
            })
            .catch(err => {
                console.log(err)
            });
            })
            .catch(err => {
                console.log(err);

            });
    };

    render() {
        return (
            <>
                <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <h4>Create your account</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" id="username" name="username" placeholder="Username" value={this.state.userrname} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password-register" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password2" name="password2" placeholder="Confirm password" value={this.state.password2} onChange={this.handleChange} className="form-control" />
                                    </div>
                                    <button onClick={this.handleSubmit} type="submit" id="modal-signup-btn" className="btn active" data-dismiss="modal">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(Register);