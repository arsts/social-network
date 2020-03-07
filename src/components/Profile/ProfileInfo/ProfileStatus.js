import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = e => {
    console.log(e.target.value);

    this.setState({ status: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span>Status: </span>
            <span
              onDoubleClick={() => {
                this.activateEditMode();
              }}
            >
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <span>Status: </span>
            <input
              type="text"
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={() => {
                this.deactivateEditMode();
              }}
              defaultValue={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
