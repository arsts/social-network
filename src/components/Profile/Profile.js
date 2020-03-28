import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div className={s.mainContent}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
