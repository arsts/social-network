import React from "react";
import styles from "./Users.module.css";

import userPhoto from "../../images/user.jpg";

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
          console.log(page);
          return (
            <span
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
                <img
                  src={userPhoto}
                  style={{ width: "100px", borderRadius: "50%" }}
                  alt=""
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
