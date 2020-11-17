import {login, logout, signup} from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
const receieveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER, 
    user,
})

const logoutCurrentUser = ()  => ({
    type: LOGOUT_CURRENT_USER,
})

export const Login = (user) => dispatch => login(user)
    .then(user => dispatch(receieveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
    );

export const Signup = user => dispatch => signup(user)
    .then(user => dispatch(receieveCurrentUser(user)));

export const Logout = () => dispatch => logout() 
    .then( () => dispatch(logoutCurrentUser()) );

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})