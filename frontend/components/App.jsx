import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Redirect, Route, withRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return (<div>
        <Route path='/' exact component={GreetingContainer} />
        <Route path="/login" exact  component={LoginFormContainer} />
        <Route path="/signup" exact component={SignupFormContainer} />
    </div>)
};

export default App;