import { createStore, combineReducers, applyMiddleware } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "./app-reducer";

const rootReducer = combineReducers({
  dialogsReducer,
  profileReducer,
  usersReducer,
  authReducer,
  form: formReducer,
  app: appReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
