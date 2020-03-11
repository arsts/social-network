import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const INITIALSIASED_SUCCESS = "INITIALSIASED_SUCCESS";

const initialState = {
  initialised: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALSIASED_SUCCESS:
      return Object.assign({}, state, {
        initialised: true
      });

    default:
      return state;
  }
};

export const setAuthUserData = () => {
  return {
    type: INITIALSIASED_SUCCESS
  };
};

export const initialise = () => dispatch => {};
