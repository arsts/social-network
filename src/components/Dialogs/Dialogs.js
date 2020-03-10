import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your message"
        type="text"
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);

const Dialogs = props => {
  let dialogsElements = props.dialogs.map(item => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));

  const addNewMessage = values => {
    props.onSendMessage(values.newMessageBody);
  };

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
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
