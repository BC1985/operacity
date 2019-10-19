import React, { Component } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./App.css";
import NavToggleButton from "../Nav/NavToggleButton";

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
        <NavToggleButton openSideNav={this.openSideNav} />
        {this.state.isSideNavOpen && <Nav />}
        <Header />
      </div>
    );
  }
}

export default App;
