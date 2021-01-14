import {connect} from 'react-redux';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';
import VideoShow from './video_show'
import {withRouter} from 'react-router-dom'

const mSTP = (state,ownProps) => {
    debugger
    return {
        video: state.entities.videos[ownProps.match.params.videoId],
        videos:  state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoShow));