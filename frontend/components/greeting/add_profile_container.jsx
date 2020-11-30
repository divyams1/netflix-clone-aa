import {connect} from 'react-redux';
import AddProfile from './add_profile';
import {createProfile, fetchProfile, fetchProfiles} from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => ({
    createProfile: (profile) => dispatch(createProfile(profile)),
    fetchProfiles: () => dispatch(fetchProfiles())
})

export default withRouter(connect(mSTP, mDTP)(AddProfile));