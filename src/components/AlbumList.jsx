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
      console.log(data);
    });
  };

  render() {
    return <h1>AlbumList</h1>;
  }
}

export default AlbumList;
