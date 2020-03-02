import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../common/Loader";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
} from "../../redux/users-reducer";

import * as axios from "axios";
import React from "react";

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.setIsFetching(false);

        this.props.setUsers(response.data.items);

        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
})(UsersContainer);
