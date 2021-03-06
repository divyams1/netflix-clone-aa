// frontend/reducers/entities_reducer.jsx

import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import profilesReducer from './profiles_reducer';
import errorsReducer from './errors_reducer';
import videosReducer from './videos_reducer';
import genresReducer from './genre_reducers';
import videoProfilesReducer from './video_profiles_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  profiles: profilesReducer,
  errors: errorsReducer,
  videos: videosReducer,
  genres: genresReducer,
  videoProfiles: videoProfilesReducer
});

export default entitiesReducer;