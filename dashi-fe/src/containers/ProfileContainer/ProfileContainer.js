import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';

import Profile from '../../components/Profile/Profle';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';
import NewsBar from '../../components/NewsBar/NewsBar';

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

    render() {
        return (
            <div className="container-fluid">
                <div className="row profile-container">
                    <div className="col-xs-2 sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-md-6 content-container">
                        <Profile profile={this.state.profile} history={this.props.history} onSubmit={this.updateProfile} onChange={this.onChange} />
                        
                    </div>
                    <div className="col-md-4 right-container">
                        <SearchBar />
                        {this.props.news.map((article, i) => (
                            <NewsBar key={i} article={article} />
                        ))}
                        <SideFooter />
                    </div>
                </div>
            </div>
        );
    };
};

export default ProfileContainer;
