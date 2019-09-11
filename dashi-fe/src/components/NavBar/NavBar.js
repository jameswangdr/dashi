import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import logo from './logo.png';
import home from './home.png';
import hashtag from './hashtag.png';
import profile from './profile.png';
import logicon from './logout.png';

const NavBar = ({ logout }) => {
    return (
        <nav>
            <Link to='/home'>
                <figure>
                    <img src={logo} id="sidenav-logo"></img>
                </figure>
            </Link>
            <Link className="sidenav-link" to='/home'>
                <img src={home} className="sidenav-icon"></img> Home
            </Link>
            <Link className="sidenav-link" to='/news'>
                <img src={hashtag} className="sidenav-icon"></img> News
            </Link>
            <Link className="sidenav-link" to='/profile'>
                <img src={profile} className="sidenav-icon"></img> Profile
            </Link>
            <Link className="sidenav-link" onClick={logout}>
                <img src={logicon} className="sidenav-icon"></img> Logout
            </Link>
        </nav>
    );
};

export default NavBar;
