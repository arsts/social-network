import { SEND_MESSAGE, UPDATE_MESSAGE_BODY } from "./constants";

export const sendMessage = () => ({
  type: SEND_MESSAGE
});
export const updateMessageBody = text => ({
  type: UPDATE_MESSAGE_BODY,
  payload: text
});
