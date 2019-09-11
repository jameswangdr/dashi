import React, { Component } from 'react';

import Home from '../../components/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';
import NewsBar from '../../components/NewsBar/NewsBar';
import PostContainer from '../../containers/PostContainer/PostContainer';

import './HomeContainer.css';

class HomeContainer extends Component {
    state = {
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row home-container">
                    <div className="col-xs-2 sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-md-6 content-container">
                        <Home profile={this.props.profile} />
                        <PostContainer profile={this.props.profile} currentUser={this.props.currentUser} />
                    </div>
                    <div className="col-md-4 right-container">
                        <SearchBar />
                        <div className='news-bar-container'>
                            {this.props.news.map((article, i) => (
                                <NewsBar key={i} article={article} />
                            ))}
                        </div>
                        <SideFooter />
                    </div>
                </div>
            </div>
        );
    };
};

export default HomeContainer;
