import React, { Component } from "react";

import AlbumList from "./components/AlbumList";
import PhotosList from "./components/PhotosList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumList />
        <PhotosList />
      </div>
    );
  }
}

export default App;
