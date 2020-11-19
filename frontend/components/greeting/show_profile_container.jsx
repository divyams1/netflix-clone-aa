import {connect} from 'react-redux';
import AddProfile from './add_profile';
import {createProfile, fetchProfiles} from '../../actions/profile_actions';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => {
    
}