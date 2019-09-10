import React from 'react';
import Landing from '../../components/Landing/Landing';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import Footer from '../../components/Footer/Footer';

const LandingContainer = (props)=> {
    const {setCurrentUser} = props;
    return (
        <>
            <Landing />
            <Register />
            <Login setCurrentUser={setCurrentUser}/>
            <Footer />
        </>
    );
};

export default LandingContainer