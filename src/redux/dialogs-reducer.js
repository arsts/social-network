import { SEND_MESSAGE, UPDATE_MESSAGE_BODY } from "./constants";

const initialState = {
  messages: [
    { id: 1, message: "How are you?" },
    { id: 2, message: "Meet at Starbucks" },
    { id: 3, message: "Happy holidays!" },
    { id: 4, message: "Hey check this out!" },
    { id: 5, message: "YO!" },
    { id: 6, message: "Whassup?" }
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ],
  newMessageBody: ""
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, { id: 7, message: state.newMessageBody }],
        newMessageBody: ""
      });

    case UPDATE_MESSAGE_BODY:
      return Object.assign({}, state, { newMessageBody: action.payload });
    default:
      return state;
  }
};
