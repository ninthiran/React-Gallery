import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GridBox extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        <NavLink to={`/album/${this.props.albumId}`}>
          <img src={this.props.thumbnailUrl} alt={this.props.title} />
          <span>Album - {this.props.albumId}</span>
        </NavLink>
      </div>
    );
  }
}

export default GridBox;
