import React from "react";
import styles from "./Users.module.css";

import userPhoto from "../../images/user.jpg";
import { NavLink } from "react-router-dom";

const User = ({
  user,
  followingInProgress,
  toggleFollowingInProgress,
  unfollow,
  follow
}) => {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.large || userPhoto}
              style={{ width: "100px", borderRadius: "50%" }}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                toggleFollowingInProgress(user.id, true);
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                toggleFollowingInProgress(user.id, true);
                follow(user.id);
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
};

export default User;
