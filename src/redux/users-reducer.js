import { FOLLOW, UNFOLLOW, SET_USERS } from "./constants";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   avatarUrl: "https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg",
    //   followed: false,
    //   fullName: "Sofia",
    //   status: "I am feeling good 🎇",
    //   location: { city: "Moscow", country: "Russia" }
    // },
    // {
    //   id: 2,
    //   avatarUrl: "https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg",
    //   followed: false,
    //   fullName: "Diana",
    //   status: "Italy mood 🍕",
    //   location: { city: "Moscow", country: "Russia" }
    // },
    // {
    //   id: 3,
    //   avatarUrl: "https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg",
    //   followed: false,
    //   fullName: "Sergey",
    //   status: "I am feeling good",
    //   location: { city: "Moscow", country: "Russia" }
    // }
  ]
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return Object.assign({}, state, {
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        })
      });

    case UNFOLLOW:
      return Object.assign({}, state, {
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        })
      });
    case SET_USERS:
      return Object.assign({}, state, {
        users: [state.users, ...action.payload]
      });

    default:
      return state;
  }
};
