import React from 'react';
import './Landing.css';

import logo from './logo.png';
import personalize from './personalize.png';
import plus from './new.png';
import hashtag from './hashtag.png';

const Landing = (props) => {
    return (
        <div className="landing-container">
            <div className="left-container">
                <div className="left-content">
                    <div>
                        <h3>You’re one step away from the shiny new Dashi.com</h3>
                        <h5>We’ve added tons of cool features, including …</h5>
                        <div className="feature-container">
                            <div className="row">
                                <div className="col-2">
                                    <img className="landing-icon" src={hashtag}></img>
                                </div>
                                <div className="col-10">
                                    <h5>Explore</h5>
                                    <p>Get the latest posts and news in one place.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <img className="landing-icon" src={plus}></img>
                                </div>
                                <div className="col-10">
                                    <h5>Share</h5>
                                    <p>Voice your thoughts and opinons</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <img className="landing-icon" src={personalize}></img>
                                </div>
                                <div className="col-10">
                                    <h5>Personalize</h5>
                                    <p>Customize your own profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="login-container">
                    <form>
                        <input type="email" name="email" value={props.state.email} onChange={props.handleChange} placeholder="Email" className="landing-email form-control" />
                        <input type="password" name="password" value={props.state.password} onChange={props.handleChange} placeholder="Password" className="landing-password form-control" />
                        <button id="login-btn-mini" onClick={props.handleSubmit} type="submit" className="btn active">Log in</button>
                        {/* <button onClick={props.handleSubmit} type="submit" id="modal-login-btn" data-dismiss="modal" className="btn active">Login</button> */}
                    </form>
                </div>
                <div className="right-content">
                    <div>
                        <img src={logo}></img>
                        <div>
                            <h3>See what’s happening in the world right now</h3>
                        </div>
                        <div className="join-container">
                            <h5>Join Dashi today.</h5>
                            <div>
                                <button id="signup-btn" className="btn active" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Sign up</button>
                            </div>
                            <div>
                                <button id="login-btn" className="btn active" aria-pressed="true" data-toggle="modal" data-target="#loginModal">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Landing;
