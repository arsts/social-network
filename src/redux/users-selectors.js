export const selectUsers = state => {
  return state.usersReducer.users;
};
export const selectPageSize = state => {
  return state.usersReducer.pageSize;
};
export const selectTotalUsersCount = state => {
  return state.usersReducer.totalUsersCount;
};
export const selectCurrentPage = state => {
  return state.usersReducer.currentPage;
};
export const selectIsFetching = state => {
  return state.usersReducer.isFetching;
};
export const selectFollowingInProgress = state => {
  return state.usersReducer.followingInProgress;
};
