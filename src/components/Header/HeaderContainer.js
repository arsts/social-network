import React, { Component } from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
  };
};
export default connect(mapStateToProps, { logout })(HeaderContainer);
