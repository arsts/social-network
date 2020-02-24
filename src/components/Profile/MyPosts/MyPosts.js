import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my MyPosts
      <div>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Hey message" />
      <Post message="How are you?" />
      <Post message="Its another post!" />
    </div>
  );
};

export default MyPosts;
