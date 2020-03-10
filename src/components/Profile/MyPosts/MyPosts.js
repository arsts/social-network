import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { sendPost } from "../../../redux/profile-reducer";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator
} from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";

const mapStateToProps = state => {
  return state.profileReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    onPostSubmit: newPostBody => {
      dispatch(sendPost(newPostBody));
    }
  };
};

const maxLength10 = maxLengthCreator(10);

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostBody"
        placeholder="Enter post text"
        validate={[required, maxLength10]}
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "profileAddPostForm"
})(AddPostForm);

const MyPosts = props => {
  const addNewPost = values => {
    props.onPostSubmit(values.newPostBody);
  };

  const postsItems = props.posts.map(item => (
    <Post message={item.message} key={item.id} />
  ));

  return (
    <div>
      <h3>My Posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div>{postsItems}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
