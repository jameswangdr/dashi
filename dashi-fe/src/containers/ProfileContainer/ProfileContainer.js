import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';

import Profile from '../../components/Profile/Profle';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';
import News from '../../components/News/News';

class ProfileContainer extends Component {
    state = {
        profile: {},
    };

    updateProfile = () => {
        const userId = localStorage.getItem('uid');
        axios.put(`${API_URL}/users/${userId}`, this.state, { withCredentials: true })
            .then(res => this.setState({ profile: res.data.data }))
            .catch(err => console.log(err));
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data.data }))
            .catch(err => console.log(err));
    };

    // componentDidUpdate() {
    //     const userId = localStorage.getItem('uid');
    //     axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
    //         .then(res => this.setState({ profile: res.data.data }))
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <div className="container-fluid">
                <div className="row home-container">
                    <div className="col-2 fixed sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-7 scrollit content-container">
                        <Profile profile={this.state.profile} history={this.props.history} onSubmit={this.updateProfile} onChange={this.onChange} />
                    </div>
                    <div className="col-md-3 right-container">
                        <SearchBar />
                        {this.props.news.map((article, i) => (
                            <News key={i} article={article} />
                        ))}
                        <SideFooter />
                    </div>
                </div>
            </div>
        );
    };
};

export default ProfileContainer;
