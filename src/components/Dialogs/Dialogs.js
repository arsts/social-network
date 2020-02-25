import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogs.map(item => (
          <DialogItem name={item.name} id={item.id} />
        ))}
      </div>

      <div className={s.messages}>
        {props.state.messages.map(item => (
          <Message message={item.message} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
