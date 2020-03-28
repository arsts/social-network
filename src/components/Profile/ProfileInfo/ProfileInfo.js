import React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../common/Preloader/Loader";
import ProfileStatus from "./ProfileStatus";
import { useState } from "react";
import userPhoto from "../../../images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = e => {
    // debugger;
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img
          src={profile.photos.large || userPhoto}
          className={s.mainPhoto}
          alt="avatar"
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatus status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm profile={profile} />
        ) : (
          <ProfileData
            profile={profile}
            goToEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>Full name: {profile.fullName}</div>
      <div>About me: {profile.aboutMe}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
      <div>My skills: {profile.lookingForAJobDescription}</div>
      <div>
        <span>Contacts: </span>
        {Object.keys(profile.contacts).map(key => {
          return (
            <Contact contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
