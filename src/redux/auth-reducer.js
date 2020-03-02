import { SET_USER_DATA } from "./constants";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        login: action.data.login,
        isAuth: true
      });

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  };
};
