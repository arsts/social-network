import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return { profile: state.profileReducer.profile };
};

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const withRouterContainerCompoinent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  withRouterContainerCompoinent
);
