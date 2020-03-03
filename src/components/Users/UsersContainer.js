import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../common/Loader";
import {
  followSuccess,
  unfollowSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingInProgress,
  getUsers,
  follow,
  unfollow
} from "../../redux/users-reducer";

import React from "react";

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <Users
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            followSuccess={this.props.followSuccess}
            unfollowSuccess={this.props.unfollowSuccess}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          />
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingInProgress,
  getUsers,
  follow,
  unfollow
})(UsersContainer);
