import {connect} from 'react-redux';
import Profile from './profile';
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';


const mSTP = (state,ownProps) => {
    return {
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default connect(mSTP, mDTP)(Profile);