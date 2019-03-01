import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class GridBox extends Component {
  state = {};
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
      </div>
    );
  }
}

export default GridBox;
