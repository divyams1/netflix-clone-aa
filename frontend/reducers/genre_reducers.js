import {RECEIVE_GENRES, RECEIVE_GENRE} from '../actions/genre_actions';

const genresReducer = ( state={} , action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_GENRE:
            const new_state = Object.assign({}, state, { [action.genre.id]: action.genre})
            return new_state;
        case RECEIVE_GENRES:
            return Object.assign({}, action.genres)
        default: 
            return state;
    }
}

export default genresReducer;