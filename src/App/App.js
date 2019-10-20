import React, { Component } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./App.css";
import NavToggleButton from "../Nav/NavToggleButton";
import LandscapeNav from "../Nav/LandscapeNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
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
        <Router>
          <NavToggleButton
            openSideNav={this.openSideNav}
            isSideNavOpen={this.state.isSideNavOpen}
          />
          <Nav show={this.state.isSideNavOpen} />
          <Route component={LandscapeNav} />
          <Switch>
            <Header exact path="/" />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
