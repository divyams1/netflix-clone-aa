import { RECEIVE_VIDEO_PROFILE, RECEIVE_VIDEO_PROFILES } from '../actions/video_profile_actions'

const videoProfilesReducer = ( state= {}, action ) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_VIDEO_PROFILES:
            return Object.assign({}, state, action.videoProfiles);
        case RECEIVE_VIDEO_PROFILE:
            const new_state = Object.assign( {},state,{ [action.videoProfile.id]: action.videoProfile })
            return new_state; 
        default:
            return state;  
    }
}

export default videoProfilesReducer;