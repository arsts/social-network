import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "my-app/auth/SET_USER_DATA";
const GET_CAPTCH_URL_SUCCESS = "my-app/auth/GET_CAPTCH_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        userId: action.data.userId,
        email: action.data.email,
        login: action.data.login,
        isAuth: action.data.isAuth
      });
    case GET_CAPTCH_URL_SUCCESS:
      return Object.assign({}, state, { captchaUrl: action.captchaUrl });

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth
    }
  };
};
export const getCaptchaUrlSuccess = captchaUrl => {
  return {
    type: GET_CAPTCH_URL_SUCCESS,
    captchaUrl
  };
};

export const getAuthUserData = () => async dispatch => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (
  email,
  password,
  rememberMe,
  captcha
) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async dispatch => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
