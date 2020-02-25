import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <div>
          <button
            onClick={() => {
              alert("hello!");
            }}
          >
            Add post
          </button>
        </div>
      </div>

      {props.posts.map(item => (
        <Post message={item.message} key={item.id} />
      ))}
    </div>
  );
};

export default MyPosts;
