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
      <Post />
    </div>
  );
};

export default MyPosts;
