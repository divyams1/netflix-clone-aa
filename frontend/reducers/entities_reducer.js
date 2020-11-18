// frontend/reducers/entities_reducer.jsx

import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import profilesReducer from './profiles_reducer';
import errorsReducer from './errors_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  profiles: profilesReducer,
  errors: errorsReducer
});

export default entitiesReducer;