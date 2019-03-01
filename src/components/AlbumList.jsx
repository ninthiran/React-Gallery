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
      const getUniqueAlbumIds = [...new Set(data.map(item => item.albumId))];
      console.log(getUniqueAlbumIds);
    });
  };

  render() {
    return <h1>AlbumList</h1>;
  }
}

export default AlbumList;
