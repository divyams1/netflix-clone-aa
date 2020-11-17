import {connect} from 'react-redux';
import {Logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(Logout())
})

export default connect(mSTP, mDTP)(Greeting);