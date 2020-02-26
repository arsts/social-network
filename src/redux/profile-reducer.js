import { SEND_POST, UPDATE_POST_BODY } from "./constants";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it is my first post", likesCount: 11 },
    { id: 3, message: "Yo", likesCount: 12 },
    { id: 4, message: "Yo", likesCount: 12 }
  ],
  postBody: ""
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_POST:
      return Object.assign({}, state, {
        posts: [...state.posts, { id: 5, message: state.postBody, likes: 12 }],
        postBody: ""
      });

    case UPDATE_POST_BODY:
      return Object.assign({}, state, { postBody: action.payload });

    default:
      return state;
  }
};
