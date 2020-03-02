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
import { getUsers } from "../../api/api";

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
    getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      this.props.setIsFetching(false);

      this.props.setUsers(response.items);

      this.props.setTotalUsersCount(response.totalCount);
    });
  }

  onPageChanged = pageNumber => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then(response => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.items);
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
