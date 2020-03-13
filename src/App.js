import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initialiseApp } from "./redux/app-reducer";
import Loader from "./components/common/Preloader/Loader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialiseApp();
  }
  render() {
    if (!this.props.initialised) {
      return <Loader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialised: state.app.initialised
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initialiseApp })
)(App);
