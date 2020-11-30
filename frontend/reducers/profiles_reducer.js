import {RECEIVE_ALL_PROFILES, RECEIVE_PROFILE} from '../actions/profile_actions';


const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            // let profiles = [...action.profiles];
            // profiles.push(action.payload.profiles);
            // return {
            //     ...state, profiles};
            return Object.assign({}, action.profiles)
        case RECEIVE_PROFILE:
            return Object.assign({}, state, { [action.profile.id]: action.profile })
        default: 
            return state;
    }
}

export default profilesReducer;