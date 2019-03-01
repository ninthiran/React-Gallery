import React, { Component } from "react";
import AlbumList from "./components/AlbumList";
import PhotosList from "./components/PhotosList";

import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AlbumList />
          <PhotosList />
        </div>
      </Router>
    );
  }
}

export default App;
