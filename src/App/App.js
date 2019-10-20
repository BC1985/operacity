import React, { Component } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./App.css";
import NavToggleButton from "../Nav/NavToggleButton";
import LandscapeNav from "../Nav/LandscapeNav";

class App extends Component {
  state = {
    isSideNavOpen: false
  };
  openSideNav = () => {
    this.setState(prevState => {
      return { isSideNavOpen: !prevState.isSideNavOpen };
    });
  };
  render() {
    return (
      <div>
        <NavToggleButton
          openSideNav={this.openSideNav}
          isSideNavOpen={this.state.isSideNavOpen}
        />
        <LandscapeNav />
        <Nav show={this.state.isSideNavOpen} />
        <Header />
      </div>
    );
  }
}

export default App;
