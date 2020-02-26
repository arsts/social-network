import {
  SEND_MESSAGE,
  UPDATE_MESSAGE_BODY,
  SEND_POST,
  UPDATE_POST_BODY
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
