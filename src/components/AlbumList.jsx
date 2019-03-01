import React, { Component } from "react";
import api from "../api/api";

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

  render() {
    return <h1>AlbumList</h1>;
  }
}

export default AlbumList;
