import React, { Component } from "react";
import api from "../Api/api";

class PhotosList extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params }
    } = this.props;
    this.state = {
      AlbumID: params.id,
      photoData: []
    };
  }

  componentDidMount = () => {
    api.getDataList(`?albumId=${this.state.AlbumID}`).then(list => {
      console.log(1);
      this.setState({ photoData: list.data });
    });
  };

  imageGridGenerator = x => {
    return (
      <div key={x.id} className="col-lg-2 col-md-4 col-sm-4 col-xs-6 grid-mar">
        <img
          src={x.thumbnailUrl}
          onClick={this.imageSelector}
          id={x.id}
          alt={x.title}
        />
        <span>{x.title}</span>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <h1>PhotosList</h1>
        <div className="row">
          {this.state.photoData.map(x => this.imageGridGenerator(x))}
        </div>
      </div>
    );
  }
}

export default PhotosList;
