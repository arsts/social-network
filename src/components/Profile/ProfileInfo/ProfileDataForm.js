import React from "react";
import { Field, reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit">Save</button>
      </div>
      <div>{error && <div>{error}</div>}</div>
      <div>
        <label htmlFor="fullName">Full name</label>
        <div>
          <Field name="fullName" component="input" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="aboutMe">About me</label>
        <div>
          <Field name="aboutMe" component="textarea" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="lookingForAJob">Looking for a job:</label>
        <Field name="lookingForAJob" component="input" type="checkbox" />
      </div>
      <div>
        <label htmlFor="lookingForAJobDescription">
          Looking for a job description:
        </label>
        <div>
          <Field
            name="lookingForAJobDescription"
            component="textarea"
            type="text"
          />
        </div>
      </div>
      <div>
        <b>Contacts</b>
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <div>
                <Field
                  placeholder={key}
                  name={"contacts." + key}
                  component="input"
                  type="text"
                />
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "editProfileData"
})(ProfileDataForm);

export default ProfileDataReduxForm;
