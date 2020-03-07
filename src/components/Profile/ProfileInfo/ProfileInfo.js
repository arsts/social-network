import React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../common/Loader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
  if (!props.profile) {
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
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <p>{props.profile.fullName}</p>
        <p>О себе: {props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
