import { usersAPI, profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SEND_POST = "my-app/profile/SEND_POST";
const SET_USER_PROFILE = "my-app/profile/SET_USER_PROFILE";
const SET_STATUS = "my-app/profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "my-app/profile/SAVE_PHOTO_SUCCESS";

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

export default function profileReducer(state = initialState, action) {
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
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
}

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
export const savePhotoSuccess = photos => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
});

export const getUserProfile = userId => async dispatch => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = file => async dispatch => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = profile => async (dispatch, getState) => {
  const userId = getState().authReducer.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(
      stopSubmit("editProfileData", { _error: response.data.messages[0] })
    );
    return Promise.reject(response.data.messages[0]);
  }
};
