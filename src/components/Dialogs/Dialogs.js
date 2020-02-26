import React from "react";
import s from "./Dialogs.module.css";

import { connect } from "react-redux";
import { sendMessage, updateMessageBody } from "../../redux/actions";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const mapStateToProps = state => {
  return state.dialogsReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateNewMessageBody: e => {
      dispatch(updateMessageBody(e.target.value));
    },
    onSendMessage: () => {
      dispatch(sendMessage());
    }
  };
};

const Dialogs = props => {
  let dialogsElements = props.dialogs.map(item => (
    <DialogItem name={item.name} id={item.id} />
  ));
  const messagesElements = props.messages.map(item => (
    <Message message={item.message} id={item.id} />
  ));
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

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
