import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PopupLayout from "./PopupLayout";

class GridBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageSelector = e => {
    const magnifierUrl = e.target.title;
    this.setState({ popupUrl: magnifierUrl }, function() {
      console.log(this.state.popupUrl);
    });
  };

  render() {
    return (
      <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        {this.props.linkEnable == true ? (
          <NavLink to={`/album/${this.props.albumId}`}>
            <img src={this.props.thumbnailUrl} alt={this.props.title} />
            <span>Album - {this.props.albumId}</span>
          </NavLink>
        ) : (
          <div>
            <img
              src={this.props.thumbnailUrl}
              alt={this.props.title}
              onClick={this.imageSelector}
              title={this.props.url}
            />
            <p>{this.props.label}</p>
          </div>
        )}
        <PopupLayout />
      </div>
    );
  }
}

export default GridBox;
