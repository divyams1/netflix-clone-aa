import {connect} from 'react-redux';
import Profile from './profile';
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';
import { fetchVideos} from '../../actions/video_actions';
import { fetchGenres }  from '../../actions/genre_actions';
import { Logout }  from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles,
        genres: state.entities.genres,
        profileId: ownProps.match.params.profileId
    }
}

const mDTP = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfiles()),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchVideos: () => dispatch(fetchVideos()),
        Logout: () => dispatch(Logout())
    }
}

export default withRouter(connect(mSTP, mDTP)(Profile));