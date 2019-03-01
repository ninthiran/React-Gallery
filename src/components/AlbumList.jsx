import React, { Component } from "react";
import api from "../api/api";
import { NavLink } from "react-router-dom";

class AlbumList extends Component {
  state = {
    imagelist: [],
    uniqueAlbumList: []
  };

  componentDidMount = () => {
    api.getDataList().then(res => {
      const data = res.data;
      let uniqueAlbumList = [];
      const getUniqueAlbumIds = [...new Set(data.map(item => item.albumId))];
      getUniqueAlbumIds.forEach(unique => {
        uniqueAlbumList[unique - 1] = data
          .map(x => {
            return x;
          })
          .filter(x => x.albumId == unique)[0];
      });
      this.setState({ uniqueAlbumList });
    });
  };

  renderAlbumList = (x, y) => {
    return (
      <div key={x.id} className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        <NavLink
          key={y}
          to={`/album/${x.albumId}`}
          className="albumGrid"
          onClick={this.albumHandler}
          id={x.albumId}
        >
          <img
            src={x.thumbnailUrl}
            onClick={this.imageSelector}
            id={x.id}
            alt=""
          />
          <span>Album-{x.albumId}</span>
        </NavLink>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <h1>Select an album to view image </h1>
        <div className="row">
          {this.state.uniqueAlbumList.map((x, y) => this.renderAlbumList(x, y))}
        </div>
      </div>
    );
  }
}

export default AlbumList;
