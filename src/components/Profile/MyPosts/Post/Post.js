import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://www.abc.net.au/news/image/8314104-1x1-940x940.jpg"
        alt=""
      />
      {props.message}
    </div>
  );
};

export default Post;
