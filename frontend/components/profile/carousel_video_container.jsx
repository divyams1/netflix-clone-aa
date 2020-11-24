import {connect} from 'react-redux';
import CarouselVideo from './carousel_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions';

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

export default connect(mSTP, mDTP)(CarouselVideo);