import {connect} from 'react-redux';
import AddProfile from './add_profile';
import {createProfile} from '../../actions/profile_actions';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    createProfile: (profile) => dispatch(createProfile(profile))
})

export default connect(mSTP, mDTP)(AddProfile)