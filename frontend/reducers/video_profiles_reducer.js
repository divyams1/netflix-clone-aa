import { RECEIVE_VIDEO_PROFILE, RECEIVE_VIDEO_PROFILES, DELETE_VIDEO_PROFILE } from '../actions/video_profile_actions'

const videoProfilesReducer = ( state= {}, action ) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_VIDEO_PROFILES:
            return Object.assign({}, state, action.videoProfiles);
        case RECEIVE_VIDEO_PROFILE:
            const new_state = Object.assign( {},state,{ [action.videoProfile.id]: action.videoProfile })
            return new_state; 
        case DELETE_VIDEO_PROFILE:
            nextState = Object.assign( {}, state);
            delete nextState[action.videoProfile.id]
            return nextState;
        default:
            return state;  
    }
}

export default videoProfilesReducer;