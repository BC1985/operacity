import React from "react";
import "./Nav.css";

function Nav(props) {
  let sideNavClass = "nav-links";
  if (props.show) {
    sideNavClass = "nav-links open";
  }
  return (
    <nav className="nav">
      <ul className={sideNavClass}>
        <li>About</li>
        <li>Program</li>
        <li>Gallery</li>
        <li>Tickets</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
