import {connect} from 'react-redux';
import SmallVideo from './small_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions'
import {withRouter} from 'react-router-dom'
import {createVideoProfile} from '../../actions/video_profile_actions';

const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos,
        genres: state.entities.genres
    }
}

const mDTP = dispatch => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos()),
        createVideoProfile: profile => dispatch(createVideoProfile(profile))
    }
}

export default withRouter(connect(mSTP, mDTP)(SmallVideo));