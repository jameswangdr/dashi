import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './HomeContainer.css';
import Home from '../../components/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideFooter from '../../components/Footer/SideFooter';
import News from '../../components/News/News';
import PostContainer from '../../containers/PostContainer/PostContainer';


class HomeContainer extends Component {
    state = {
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row home-container">
                    <div className="col-sm-2 sidebar-container">
                        <NavBar logout={this.props.logout} />
                    </div>
                    <div className="col-sm-7 content-container">
                        <Home profile={this.props.profile}/>
                        <PostContainer profile={this.props.profile} currentUser={this.props.currentUser}/>
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

export default HomeContainer;
