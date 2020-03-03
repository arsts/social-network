import React, { Component } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends Component {
  componentDidMount() {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
