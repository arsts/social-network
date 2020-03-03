import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = props => {
  let dialogsElements = props.dialogs.map(item => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));
  const messagesElements = props.messages.map(item => (
    <Message message={item.message} key={item.id} />
  ));
  if (props.isAuth === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={props.newMessageBody}
              onChange={props.onUpdateNewMessageBody}
            ></textarea>
          </div>
          <div>
            <button onClick={props.onSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
