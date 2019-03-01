import React, { Component } from "react";
import api from "../Api/api";

class PhotosList extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    this.state = {
      AlbumID: params.id
    };
  }

  componentDidMount = () => {
    api.getDataList(`?albumId=${this.state.AlbumID}`).then(result => {
      console.log(result.data);
    });
  };
  render() {
    return <h1>PhotosList</h1>;
  }
}

export default PhotosList;
