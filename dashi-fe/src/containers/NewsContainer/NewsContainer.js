import React, { Component } from 'react';

import News from '../../components/News/News';
import NewsBar from '../../components/NewsBar/NewsBar';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';

import './NewsContainer.css'

class NewsContainer extends Component {
    state = {
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row news-container">
                    <div className="col-xs-2 sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-md-6 content-container">
                        <div>
                            <p className="news">News</p>
                            <hr/>
                        </div>
                        <div>
                            {this.props.news.map((article, i) => (
                                <News key={i} article={article} />
                            ))}
                        </div>
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

export default NewsContainer;
