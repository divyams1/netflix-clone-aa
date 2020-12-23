import {connect} from 'react-redux';
import SignUpForm from './sign_up_form';
import {withRouter} from 'react-router-dom'
const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {}
}

export default withRouter(connect(mSTP, mDTP)(SignUpForm));