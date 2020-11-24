import {connect} from 'react-redux';
import { fetchProfile, fetchProfiles } from '../../actions/profile_actions';
import ShowPageNavBar from './show_page_nav_bar';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default connect(mSTP, mDTP)(ShowPageNavBar);