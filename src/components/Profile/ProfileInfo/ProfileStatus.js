import React from "react";
import { useState, useEffect } from "react";

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = e => {
    setStatus(e.target.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span>Status: </span>
          <span
            onDoubleClick={() => {
              activateEditMode();
            }}
          >
            {status}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <span>Status: </span>
          <input
            type="text"
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={() => {
              deactivateEditMode();
            }}
            defaultValue={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
