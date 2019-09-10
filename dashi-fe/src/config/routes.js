import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';

import LandingContainer from '../containers/LandingContainer/LandingContainer';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import NewsContainer from '../containers/NewsContainer/NewsContainer';

const Routes = ({ currentUser, setCurrentUser, logout, history, news }) => {
    const PrivateRoute = ({ component: Component, ...rest }) => {
        return <Route {...rest} render={(props) => (
            currentUser
            ? <Component {...props} currentUser={currentUser} news={news} logout={logout} />
            : <Redirect to='/' />
        )} />
    };

    return (
        <Switch>
            <Route exact path='/' render={(props) => <LandingContainer {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} history={history}/>} />
            <PrivateRoute path='/home' component={ HomeContainer } news={news} logout={logout} currentUser={currentUser} history={history}/>
            <PrivateRoute path='/profile' component={ ProfileContainer } news={news} logout={logout} currentUser={currentUser} history={history}/>
            <PrivateRoute path='/news' component={ NewsContainer } news={news} logout={logout} currentUser={currentUser} history={history}/>
            <Route path='*' component={ NotFound }/>
        </Switch>
    );
};

export default withRouter(Routes);