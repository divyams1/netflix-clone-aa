export const RECEIVE_PROFILE = "RECEIVE_PROFILE"
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES"
import {getProfiles, makeProfile, getProfile} from '../util/profile_util'

const receiveAllProfiles = profiles => {
    return {
        type: RECEIVE_ALL_PROFILES,
        profiles
    }
}

const receiveProfile = profile => {
    return {
        type: RECEIVE_PROFILE,
        profile
    }
}


export const fetchProfiles = () => dispatch => {
    return getProfiles()
        .then(profiles => dispatch(receiveAllProfiles(profiles)));
}

export const createProfile = profile => dispatch => {
    return makeProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)));
}

export const fetchProfile = profileId => dispatch => {
    return getProfile(profileId)
        .then( profile => dispatch(receiveProfile(profile)))
}