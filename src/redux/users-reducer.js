import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING
} from "./constants";

const initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
        users: action.payload
      });
    case SET_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.currentPage
      });
    case SET_TOTAL_USERS_COUNT:
      return Object.assign({}, state, {
        totalUsersCount: action.payload
      });
    case TOGGLE_IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: action.payload
      });

    default:
      return state;
  }
};

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
