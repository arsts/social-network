import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/actions";

const mapStateToProps = state => {
  return { users: state.usersReducer.users };
};
const MapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(mapStateToProps, MapDispatchToProps)(Users);
