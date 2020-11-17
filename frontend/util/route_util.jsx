import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter } from 'react-router-dom';
const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};


const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
const Protected = ({loggedIn, path, component: Component}) => (
    <Route 
    path={path}
    render={ (props) => (
        loggedIn? <Component {...props} /> : <Redirect to="/signup" />
    )}
    />
)
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));