import React from "react";

import { connect } from "react-redux";
import { sendMessage, updateMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = state => {
  return { ...state.dialogsReducer, isAuth: state.authReducer.isAuth };
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
class DialogsContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dialogs {...this.props} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
