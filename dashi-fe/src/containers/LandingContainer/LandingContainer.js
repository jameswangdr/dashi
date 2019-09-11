import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


import Landing from '../../components/Landing/Landing';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import Footer from '../../components/Footer/Footer';

class LandingContainer extends Component {
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
                this.props.setCurrentUser(res.data.id, res.data.username);
                this.props.history.push('/home')
            })
            .catch(err => {
                console.log(err)
            });
    };
    render() {
        return (
            <>
                <Landing state={this.state} setCurrentUser={this.props.setCurrentUser} handleChange={this.handleChange} handlesubmit={this.handleSubmit}/>
                <Register setCurrentUser={this.props.setCurrentUser}/>
                <Login setCurrentUser={this.props.setCurrentUser} />
                <Footer />
            </>
        );
    }
};

export default LandingContainer