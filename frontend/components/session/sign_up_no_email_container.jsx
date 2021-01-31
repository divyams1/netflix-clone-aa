import {connect} from 'react-redux';
import {Signup, removeErrors} from '../../actions/session_actions';
import SignUpNoEmail from './sign_up_no_email';



const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session, 
        formType: 'signup',
        session: state.session 
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(Signup(user))
    }
}

export default connect(mSTP, mDTP)(SignUpNoEmail);