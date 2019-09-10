import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import News from '../../components/News/News';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';

import './NewsContainer.css'

class NewsContainer extends Component {
    state = {
    }

    // fetchNews = () => {
    //     const url = 'https://newsapi.org/v2/top-headlines?' +
    //         'country=us&' +
    //         'apiKey=c436a32b070b4e6ea259bb4ac3a1b81d';
    //     const req = new Request(url);

    //     fetch(req).then(response => response.json()
    //         .then(data => ({
    //             data: data,
    //             status: response.status
    //         })
    //         ).then(res => {
    //             this.setState({ news: res.data.articles })
    //         }));
    // };

    // componentDidMount() {
    //     this.fetchNews();
    // };

    render() {

        return (
            <div className="container-fluid">
                <div className="row home-container">
                    <div className="col-sm-2 fixed sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-sm-7 scrollit content-container">
                        <div>
                            {this.props.news.map((article, i) => (
                                <News key={i} article={article} />
                            ))}
                        </div>

                        {/* <News currentUser={this.props.currentUser} profile={this.props.profile} news={this.state.news} /> */}
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
export default NewsContainer;
