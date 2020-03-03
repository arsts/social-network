import { createStore, combineReducers, applyMiddleware } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  usersReducer,
  authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
