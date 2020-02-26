import { createStore, combineReducers } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

const store = createStore(combineReducers({ dialogsReducer, profileReducer }));

export default store;
