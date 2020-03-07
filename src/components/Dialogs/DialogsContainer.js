import { connect } from "react-redux";
import { sendMessage, updateMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
  return { ...state.dialogsReducer };
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
