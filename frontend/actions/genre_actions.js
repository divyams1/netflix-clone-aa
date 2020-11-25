export const RECEIVE_GENRE = "RECEIVE_GENRE"
export const RECEIVE_GENRES = "RECEIVE_GENRES"
import {getGenres, getGenre} from '../util/genre_util';
import { RECEIVE_ALL_PROFILES } from './profile_actions';

const receiveGenre = genre => { 
    return {
        type: RECEIVE_GENRE,
        genre 
    }
}

export const receiveGenres = genres => {
    return {
        type: RECEIVE_GENRES, 
        genres 
    }
}

export const fetchGenres = () => dispatch => {
    return getGenres()
        .then( genres => dispatch(receiveGenres(genres)));
}

export const fetchGenre = genreId => dispatch => {
    return getGenre(genreId)
        .then( genre => dispatch(receiveGenre(genre)))
}