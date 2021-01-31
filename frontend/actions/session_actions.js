import {login, logout, signup} from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS ="CLEAR_ERRORS";
const receieveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER, 
    user,
})

const logoutCurrentUser = ()  => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}
const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const removeErrors = () => dispatch => ( () => dispatch(clearErrors));

export const Login = (user) => dispatch => login(user)
    .then(user => dispatch(receieveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
    );

export const Signup = user => dispatch => signup(user)
    .then(user => dispatch(receieveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)));

export const Logout = () => dispatch => logout() 
    .then( () => dispatch(logoutCurrentUser()),
    error => dispatch(receiveErrors(error.responseJSON)));

