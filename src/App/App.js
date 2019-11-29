import React, { Component } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import "./App.css";
import NavToggleButton from "../Nav/NavToggleButton";
import LandscapeNav from "../Nav/LandscapeNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Program from "../Program/Program";
import TicketsPurchaseForm from "../TicketsPurchaseForm/TicketsPurchaseForm";
import { OperaContextProvider } from "../OperaContext";
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
    const routes = [
      {
        to: "/about",
        name: "About",
        onClick: this.openSideNav
      },
      {
        to: "/program",
        name: "Program",
        onClick: this.openSideNav
      },
      {
        to: "/gallery",
        name: "Gallery",
        onClick: this.openSideNav
      },
      {
        to: "/tickets",
        name: "Tickets",
        onClick: this.openSideNav
      }
    ];
    return (
      <div>
        <Router>
          <NavToggleButton
            openSideNav={this.openSideNav}
            isSideNavOpen={this.state.isSideNavOpen}
          />
          <Nav show={this.state.isSideNavOpen} routes={routes} />
          <LandscapeNav routes={routes} />
          <Switch>
            <Header exact path="/" />
            <Route path="/about" component={About} routes={routes} />
            <Route path="/subscribe" component={SubscribeForm} />
            <OperaContextProvider>
              <Route path="/program" component={Program} />
              <Route path="/tickets" component={TicketsPurchaseForm} />
            </OperaContextProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
