import {connect} from 'react-redux';
import MainVideo from './main_video';
import {fetchVideo, fetchVideos} from '../../actions/video_actions'
import CarouselRow from './carousel_row'
import { fetchProfile, fetchProfiles} from '../../actions/profile_actions';
import {withRouter} from 'react-router-dom';
import {fetchVideoProfiles,  createVideoProfile, deleteVideoProfileAct} from '../../actions/video_profile_actions';

const mSTP = (state,ownProps) => {
    return {
        videos: state.entities.videos,
        profiles: state.entities.profiles
    }
}

const mDTP = dispatch => {
    return {
        fetchProfile: id => dispatch(fetchProfile()),
        fetchProfiles: () => dispatch(fetchProfiles()),
    }
}

export default withRouter(connect(mSTP, mDTP)(CarouselRow));