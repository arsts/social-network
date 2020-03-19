import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name="newMessageBody"
        placeholder="Enter your message"
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

const Dialogs = ({ dialogs, onSendMessage, messages, isAuth }) => {
  let dialogsElements = dialogs.map(item => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ));

  const addNewMessage = values => {
    onSendMessage(values.newMessageBody);
  };

  const messagesElements = messages.map(item => (
    <Message message={item.message} key={item.id} />
  ));

  if (isAuth === false) {
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
