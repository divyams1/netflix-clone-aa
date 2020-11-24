import {connect} from 'react-redux';
import MainVideo from './main_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions'
import CarouselRow from './carousel_row'


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

export default connect(mSTP, mDTP)(CarouselRow);