import React from "react";
import styles from "./Users.module.css";
import { followUser, unfollowUser } from "../../api/api";

import userPhoto from "../../images/user.jpg";
import { NavLink } from "react-router-dom";

const Users = props => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(page => {
          return (
            <span
              key={page}
              onClick={e => {
                props.onPageChanged(page);
              }}
              className={
                props.currentPage === page ? styles.selectedPage : undefined
              }
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={userPhoto}
                    style={{ width: "100px", borderRadius: "50%" }}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => {
                      props.toggleFollowingInProgress(user.id, true);
                      unfollowUser(user.id).then(response => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                        props.toggleFollowingInProgress(user.id, false);
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => {
                      props.toggleFollowingInProgress(user.id, true);
                      followUser(user.id).then(response => {
                        // props.toggleFollowingInProgress(user.id);
                        if (response.data.resultCode === 0) {
                          props.follow(user.id);
                        }
                        props.toggleFollowingInProgress(user.id, false);
                      });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
