import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from './constants'
import axios from 'axios';
import './App.css';

import Routes from './config/routes'

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    profile: {},
    news: [],
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId);
    this.setState({ currentUser: userId });
  }

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}/auth/logout`, { withCredentials: true })
      .then(() => {
        this.props.history.push('/');
        this.setState({ currentUser: null });
      })
  };

  fetchNews = () => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=c436a32b070b4e6ea259bb4ac3a1b81d';
    const req = new Request(url);

    fetch(req).then(response => response.json()
      .then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        this.setState({ news: res.data.articles })
      }));
  };

  componentDidMount() {
    this.fetchNews();
    const userId = localStorage.getItem('uid');
    axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
        .then(res => this.setState({ profile: res.data.data }))
        .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Routes news={this.state.news} profile={this.state.profile} currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.handleLogout} history={this.props.history} />
      </>
    );
  };
};
export default withRouter(App);
