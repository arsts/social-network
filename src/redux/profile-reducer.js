import { SEND_POST, SET_USER_PROFILE, SET_STATUS } from "./constants";
import { usersAPI, profileAPI } from "../api/api";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it is my first post", likesCount: 11 },
    { id: 3, message: "Yo", likesCount: 12 },
    { id: 4, message: "Yo", likesCount: 12 }
  ],
  profile: null,
  status: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      return Object.assign({}, state, {
        posts: [
          ...state.posts,
          { id: 5, message: action.newPostBody, likes: 12 }
        ]
      });

    case SET_USER_PROFILE:
      return Object.assign({}, state, { profile: action.payload });
    case SET_STATUS:
      return Object.assign({}, state, { status: action.status });

    default:
      return state;
  }
};

export const sendPost = newPostBody => ({
  type: SEND_POST,
  newPostBody
});

export const setUserProfile = userProfile => ({
  type: SET_USER_PROFILE,
  payload: userProfile
});

export const setStatus = status => ({
  type: SET_STATUS,
  status
});

export const getUserProfile = userId => dispatch => {
  debugger;
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
