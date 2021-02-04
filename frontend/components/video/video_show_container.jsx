import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import VideoShow from './video_show'
import {withRouter} from 'react-router-dom'
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';

const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos,
        profiles: Object.values(state.entities.profiles).filter( profile => profile.user_id === state.session.id ),
        
    }
}

const mDTP = dispatch => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        fetchVideos: () => dispatch(fetchVideos()),
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoShow));