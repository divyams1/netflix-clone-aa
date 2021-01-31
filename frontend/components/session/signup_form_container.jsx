import {connect} from 'react-redux';
import {Signup, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state, ownProps) => {
    return {
        errors: state.entities.errors,
        formType: 'signup'
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(Signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);