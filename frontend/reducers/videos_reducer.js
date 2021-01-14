import {RECEIVE_VIDEO, RECEIVE_ALL_VIDEOS} from '../actions/video_actions';


const videosReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({},action.videos);
        case RECEIVE_VIDEO:
            const new_state = Object.assign({}, { [action.video.id]: action.video})
            return new_state; 
        default:
            return state; 
    }

}

export default videosReducer;