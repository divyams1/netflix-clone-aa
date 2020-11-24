import {RECEIVE_ALL_PROFILES, RECEIVE_PROFILE} from '../actions/profile_actions';


const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            return Object.assign({}, action.profiles)
        case RECEIVE_PROFILE:
            const new_state = Object.assign({}, state, { [action.profile.id]: action.profile })
            return new_state;
        default: 
            return state;
    }
}

export default profilesReducer;