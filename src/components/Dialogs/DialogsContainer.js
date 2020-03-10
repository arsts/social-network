import { connect } from "react-redux";
import { sendMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
  return { ...state.dialogsReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: newMessageBody => {
      dispatch(sendMessage(newMessageBody));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
