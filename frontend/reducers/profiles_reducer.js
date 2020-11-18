import {RECEIVE_ALL_PROFILES} from '../actions/profile_actions';


const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PROFILES:
            return Object.assign({}, action.profiles)
        default: 
            return state;
    }
}

export default profilesReducer;