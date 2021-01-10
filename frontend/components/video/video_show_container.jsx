import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import VideoShow from './video_show'
import {withRouter} from 'react-router-dom'

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

export default withRouter(connect(mSTP, mDTP)(VideoShow));