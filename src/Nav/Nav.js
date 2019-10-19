import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav-links">
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
