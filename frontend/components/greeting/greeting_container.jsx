import {connect} from 'react-redux';
import { fetchProfiles } from '../../actions/profile_actions';
import {Logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        // profiles: state.entities.profiles
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(Logout()),
    fetchProfiles: () => dispatch(fetchProfiles())
})

export default connect(mSTP, mDTP)(Greeting);