import React from 'react';
import './Landing.css';

const Landing = () => {
    return (

        <div id="landing-container">
            <div id="left-container">
                <div id="left-content">
                    <div>
                        You’re one step away from the shiny new Twitter.com
            We’ve added tons of cool features, including …
            Explore
            Get the latest Tweets, news, and videos in one place.
            Bookmarks
            Save that interesting Tweet for later.
            Personalize
            Choose from new themes and more dark mode options.
                </div>
                </div>
            </div>
            <div id="right-container">
                <div id="left-content">
                    <div>
                        See what’s happening in the world right now
        Join Dashi today.
               <button className="btn btn-primary btn-lg active landingbtn" aria-pressed="true" data-toggle="modal" data-target="#registerModal">Register</button>
                        <button className="btn btn-primary btn-lg active landingbtn" aria-pressed="true" data-toggle="modal" data-target="#loginModal">Login</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Landing;
