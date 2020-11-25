import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import VideoShow from './video_show'

const mSTP = (state,ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoId]
    }
}

const mDTP = dispatch => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    }
}

export default connect(mSTP, mDTP)(VideoShow);