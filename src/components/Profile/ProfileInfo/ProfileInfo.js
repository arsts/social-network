import React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../common/Preloader/Loader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Loader />;
  }
  return (
    <div>
      {/* <div>
        <img
          src={
            "https://images.unsplash.com/photo-1498898733745-c8c6df58e4ba?ixlib=rb-1.2.1"
          }
          alt=""
        />
      </div> */}
      <div>
        <img src={profile.photos.large} alt="" />
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <p>{profile.fullName}</p>
        <p>О себе: {profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
