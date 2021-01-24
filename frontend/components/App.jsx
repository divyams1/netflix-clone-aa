import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Redirect, Route, withRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import DemoContainer from './greeting/demo_container';
import ProfileContainer from "./profile/profile_container";
import VideoShowContainer from './video/video_show_container'
import AddProfileContainer from './greeting/add_profile_container';
import SignUpNoEmailContainer from './session/sign_up_no_email_container';
import MyListContainer from './my_list/my_list_container';

const App = () => {
    return (<div className="page">
        
        <Route path='/' exact component={GreetingContainer} />
        <Route path="/login" exact  component={LoginFormContainer} />
        <Route path="/signup/:email" exact component={SignupFormContainer} />
        <Route path='/demo' exact component={DemoContainer} />
        <Route path='/profiles/:profileId' exact component={ProfileContainer} />
        <Route path='/videos/:videoId' exact component={VideoShowContainer} />
        <Route path='/add' exact component={AddProfileContainer} />
        <Route path="/signup" exact component={SignUpNoEmailContainer} />
        <Route path="/profiles/:profileId/myList" exact component={MyListContainer} />
    </div>)
};

export default App;