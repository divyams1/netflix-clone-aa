import {connect} from 'react-redux';
import {Signup, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = (state, ownProps) => {
    return {
        errors: [],
        formType: 'signup'
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: user => dispatch(Signup(user)),
        removeErrors: () => dispatch(removeErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);