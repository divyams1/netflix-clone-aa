import {connect} from 'react-redux';
import SearchVideo from './search_video'
import {fetchVideo, fetchVideos} from '../../actions/video_actions';


const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mSTP, mDTP)(SearchVideo);