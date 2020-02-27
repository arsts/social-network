import {
  SEND_MESSAGE,
  UPDATE_MESSAGE_BODY,
  SEND_POST,
  UPDATE_POST_BODY,
  FOLLOW,
  UNFOLLOW,
  SET_USERS
} from "./constants";

export const sendMessage = () => ({
  type: SEND_MESSAGE
});
export const updateMessageBody = text => ({
  type: UPDATE_MESSAGE_BODY,
  payload: text
});

export const sendPost = () => ({
  type: SEND_POST
});

export const updatePostBody = body => ({
  type: UPDATE_POST_BODY,
  payload: body
});

export const followAC = userId => ({
  type: FOLLOW,
  payload: userId
});
export const unfollowAC = userId => ({
  type: UNFOLLOW,
  payload: userId
});
export const setUsersAC = users => ({
  type: SET_USERS,
  payload: users
});
