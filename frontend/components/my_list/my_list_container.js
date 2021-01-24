import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import { fetchVideoProfiles, createVideoProfile} from'../../actions/video_profile_actions';
import myList from './my_list'
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';
const mSTP = (state, ownProps) => {
    return {
        videos: state.entities.videos,
        videoProfiles: state.entities.videoProfiles,
        currentUser: state.entities.users[state.session.id],
        profiles: state.entities.profiles,
        genres: state.entities.genres,
        profileId: ownProps.match.params.profileId
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideoProfiles: () => dispatch(fetchVideoProfiles()),
        fetchProfiles: () => dispatch(fetchProfiles()),
        fetchGenres: () => dispatch(fetchGenres()),
        Logout: () => dispatch(Logout())
    }
}

export default connect(mSTP, mDTP)(myList);