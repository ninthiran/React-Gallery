import React, { Component } from "react";

class PopupLayout extends Component {
  state = {};
  render() {
    return (
      <div className="popup">
        <button className="close-btn" onClick={this.props.popupClose}>
          X
        </button>
        <h1>text</h1>
      </div>
    );
  }
}

export default PopupLayout;
