import {connect} from 'react-redux';
import Profile from './profile';
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';
import { fetchGenres }  from '../../actions/genre_actions';


const mSTP = (state,ownProps) => {
    return {
        profiles: state.entities.profiles,
        genres: state.entities.genres
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles()),
        fetchGenres: () => dispatch(fetchGenres())
    }
}

export default connect(mSTP, mDTP)(Profile);