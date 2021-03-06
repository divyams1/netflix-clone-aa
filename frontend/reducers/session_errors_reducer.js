import { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions";


export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ERRORS:
                return Object.assign([], action.errors, state);
        case RECEIVE_CURRENT_USER: 
                return [];
        case CLEAR_ERRORS:
                return Object.assign([]);
        default:
                return state; 
    }
}