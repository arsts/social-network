import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";

const store = createStore(
  combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer
  })
);

export default store;
