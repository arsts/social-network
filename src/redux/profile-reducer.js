import { SEND_POST, UPDATE_POST_BODY, SET_USER_PROFILE } from "./constants";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "it is my first post", likesCount: 11 },
    { id: 3, message: "Yo", likesCount: 12 },
    { id: 4, message: "Yo", likesCount: 12 }
  ],
  postBody: "",
  profile: null
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
    case SET_USER_PROFILE:
      return Object.assign({}, state, { profile: action.payload });

    default:
      return state;
  }
};

export const sendPost = () => ({
  type: SEND_POST
});

export const updatePostBody = body => ({
  type: UPDATE_POST_BODY,
  payload: body
});
export const setUserProfile = userProfile => ({
  type: SET_USER_PROFILE,
  payload: userProfile
});
