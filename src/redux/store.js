import { createStore } from "redux";
import { dialogsReducer } from "./reducers";

const store = createStore(dialogsReducer);

export default store;
