import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={s.mainContent}>
      <ProfileInfo profile={props.profile} />
      <MyPosts />
    </div>
  );
};

export default Profile;
