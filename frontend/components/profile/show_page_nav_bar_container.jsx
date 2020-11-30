import {connect} from 'react-redux';
import { fetchProfile, fetchProfiles } from '../../actions/profile_actions';
import { Logout} from '../../actions/session_actions';
import ShowPageNavBar from './show_page_nav_bar';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles()),
        Logout: () => dispatch(Logout())
    }
}

export default withRouter(connect(mSTP, mDTP)(ShowPageNavBar));