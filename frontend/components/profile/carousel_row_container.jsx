import {connect} from 'react-redux';
import MainVideo from './main_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions'
import CarouselRow from './carousel_row'
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom';

const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos,
        profiles: state.entities.profiles 
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchProfile: id => dispatch(fetchProfile()),
        fetchProfiles: () => dispatch(fetchProfiles())
    }
}

export default withRouter(connect(mSTP, mDTP)(CarouselRow));