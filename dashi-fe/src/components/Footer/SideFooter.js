import React from 'react';
import './Footer.css';

const SideFooter = () => {
    return (
        <nav id="side-footer" className="navbar navbar-expand navbar-light bg-light">
            <ul className="navbar-nav nav-fill w-100">
                <li className="nav-item">
                    <a className="nav-link" href="#">© 2019 Dashi, Inc.</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideFooter;
