export const RECEIVE_VIDEO_PROFILES = "RECEIVE_VIDEO_PROFILES";
export const RECEIVE_VIDEO_PROFILE = "RECEIVE_VIDEO_PROFILE";
import { getVideoProfiles, makeVideoProfile } from '../util/video_profile_util';

export const receiveVideoProfiles = videoProfiles => {
    return {
        type: RECEIVE_VIDEO_PROFILES, 
        videoProfiles
    }
}

export const receiveVideoProfile = videoProfile => {
    return {
        type: RECEIVE_VIDEO_PROFILE, 
        videoProfile
    }
}



export const fetchVideoProfiles = () => dispatch => {
    return getVideoProfiles()
        .then( videoProfiles => dispatch(receiveVideoProfiles(videoProfiles)));
}

export const createVideoProfile = profile => dispatch => {
    return makeVideoProfile(profile)
        .then( profile => dispatch(receiveVideoProfile(profile)));
}