import React from "react";

const Users = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.avatarUrl}
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
