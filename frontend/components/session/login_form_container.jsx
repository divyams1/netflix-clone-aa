import {connect} from 'react-redux';
import {Login} from '../../actions/session_actions';
import SessionForm from './session_form';



const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session, 
        formType: 'login',
        session: state.session 
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(Login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);