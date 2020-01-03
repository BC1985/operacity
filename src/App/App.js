import React, { useState } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import NavToggleButton from "../Nav/NavToggleButton";
import LandscapeNav from "../Nav/LandscapeNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../About/About";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Program from "../Program/Program";
import TicketsPurchaseForm from "../TicketsPurchaseForm/TicketsPurchaseForm";
import Singers from "../Singers/Singers";
import News from "../News/News";
import { OperaContextProvider } from "../OperaContext";
import NewsItem from "../News/NewsItem";
import Gallery from "../Gallery/Gallery";
import Image from "../Image/Image";
import Footer from "../Footer/Footer";
function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const routes = [
    {
      to: "/",
      name: "Home",
      onClick: openSideNav
    },
    {
      to: "/about",
      name: "About us",
      onClick: openSideNav
    },
    {
      to: "/program",
      name: "Program",
      onClick: openSideNav
    },
    {
      to: "/news",
      name: "News",
      onClick: openSideNav
    },
    {
      to: "/gallery",
      name: "Gallery",
      onClick: openSideNav
    },
    {
      to: "/who-we-are",
      name: "Performers",
      onClick: openSideNav
    }
  ];
  return (
    <div>
      <Router>
        <NavToggleButton openSideNav={openSideNav} />
        <Nav show={isSideNavOpen} routes={routes} />
        <LandscapeNav routes={routes} />
        <Switch>
          <Header exact path="/" />
          <Route path="/about" component={About} routes={routes} />
          <Route path="/subscribe" component={SubscribeForm} />
          <OperaContextProvider>
            <Route path="/program" component={Program} />
            <Route path="/tickets" component={TicketsPurchaseForm} />
            <Route path="/who-we-are" component={Singers} />
            <Route exact path="/news" component={News} />
            <Route path="/news/:newsItemId" component={NewsItem} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="/gallery/:image" component={Image} />
          </OperaContextProvider>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
