import {connect} from 'react-redux';
import MainVideo from './main_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions'
import {withRouter} from 'react-router-dom'

const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default withRouter(connect(mSTP, mDTP)(MainVideo));