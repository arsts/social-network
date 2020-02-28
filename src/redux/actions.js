import {
  SEND_MESSAGE,
  UPDATE_MESSAGE_BODY,
  SEND_POST,
  UPDATE_POST_BODY,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING
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

export const follow = userId => ({
  type: FOLLOW,
  payload: userId
});
export const unfollow = userId => ({
  type: UNFOLLOW,
  payload: userId
});
export const setUsers = users => ({
  type: SET_USERS,
  payload: users
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsersCount = totalUsers => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsers
});
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching
});
