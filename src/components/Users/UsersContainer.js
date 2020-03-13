import { connect } from "react-redux";
import Users from "./Users";

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

import {
  selectUsers,
  selectPageSize,
  selectTotalUsersCount,
  selectCurrentPage,
  selectIsFetching,
  selectFollowingInProgress
} from "../../redux/users-selectors";

import React from "react";
import Loader from "../common/Preloader/Loader";

const mapStateToProps = state => {
  return {
    users: selectUsers(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state)
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
