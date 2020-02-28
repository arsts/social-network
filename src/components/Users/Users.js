import React from "react";
import * as axios from "axios";

import userPhoto from "../../images/user.jpg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      debugger;
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => this.props.setUsers(response.data.items));
    }
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.getUsers}>Get Users</button>
        </div>
        {this.props.users.map(user => {
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
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
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
  }
}

export default Users;
