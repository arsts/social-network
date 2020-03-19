import React from "react";

import User from "./User";
import Pagination from "../common/Pagination/Pagination";

const Users = ({
  users,
  followingInProgress,
  toggleFollowingInProgress,
  unfollow,
  follow,
  onPageChanged,
  totalUsersCount,
  pageSize,
  currentPage,
  ...props
}) => {
  return (
    <div>
      <div>
        <Pagination
          onPageChanged={onPageChanged}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
      <div>
        {users.map(user => (
          <User
            toggleFollowingInProgress={toggleFollowingInProgress}
            followingInProgress={followingInProgress}
            user={user}
            key={user.id}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
