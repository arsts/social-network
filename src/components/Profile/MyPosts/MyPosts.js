import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { sendPost, updatePostBody } from "../../../redux/profile-reducer";

const mapStateToProps = state => {
  return state.profileReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    onPostChange: e => {
      dispatch(updatePostBody(e.target.value));
    },
    onPostSubmit: () => {
      dispatch(sendPost());
    }
  };
};

const MyPosts = props => {
  const postsItems = props.posts.map(item => (
    <Post message={item.message} key={item.id} />
  ));

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            value={props.postBody}
            onChange={props.onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={props.onPostSubmit}>Add post</button>
        </div>
      </div>
      <div>{postsItems}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
