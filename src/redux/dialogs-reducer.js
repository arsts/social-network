import { SEND_MESSAGE } from "./constants";

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
  ]
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return Object.assign({}, state, {
        messages: [...state.messages, { id: 7, message: body }]
      });

    default:
      return state;
  }
};

export const sendMessage = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});
