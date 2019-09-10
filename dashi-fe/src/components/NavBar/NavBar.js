import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ logout, currentUser, setCurrentUser }) => {
    return (
        <nav>
            <Link className="nav-link" to='/home'>Home</Link>
            <Link className="nav-link" to='/profile'>Profile</Link>
            <Link className="nav-link" to='/news'>News</Link>
            <Link className="nav-link" onClick={logout} >Logout</Link>
        </nav>
    );
};

export default NavBar;
