import React, { Component } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
