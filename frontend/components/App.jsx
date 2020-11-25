import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Redirect, Route, withRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import DemoContainer from './greeting/demo_container';
import ProfileContainer from "./profile/profile_container";
import VideoShowContainer from './video/video_show_container'

const App = () => {
    return (<div>
        
        <Route path='/' exact component={GreetingContainer} />
        <Route path="/login" exact  component={LoginFormContainer} />
        <Route path="/signup" exact component={SignupFormContainer} />
        <Route path='/demo' exact component={DemoContainer} />
        <Route path='/profiles/:profileId' exact component={ProfileContainer} />
        <Route path='/videos/:videoId' exact component={VideoShowContainer} />
    </div>)
};

export default App;