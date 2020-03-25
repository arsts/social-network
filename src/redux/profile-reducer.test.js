import { profileReducer, sendPost } from "./profile-reducer";
import React from "react";

it("length of posts should be incremented", () => {
  const action = sendPost("it-kamasutra.com");
  const initialState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "it is my first post", likesCount: 11 },
      { id: 3, message: "Yo", likesCount: 12 },
      { id: 4, message: "Yo", likesCount: 12 }
    ]
  };
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(5);
});
// it("message of new post should be correct", () => {
//   const action = sendPost("it-kamasutra.com");
//   const initialState = {
//     posts: [
//       { id: 1, message: "Hi, how are you?", likesCount: 12 },
//       { id: 2, message: "it is my first post", likesCount: 11 },
//       { id: 3, message: "Yo", likesCount: 12 },
//       { id: 4, message: "Yo", likesCount: 12 }
//     ]
//   };
//   const newState = profileReducer(initialState, action);
//   expect(newState.posts[4].message).toBe("it-kamasutra.com");
// });
