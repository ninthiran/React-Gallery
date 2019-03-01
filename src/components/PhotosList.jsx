import React, { Component } from "react";

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
    console.log(this.state.AlbumID);
  };
  render() {
    return <h1>PhotosList</h1>;
  }
}

export default PhotosList;
