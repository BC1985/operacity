import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>About</li>
        <li>Program</li>
        <li>Gallery</li>
        <li>Tickets</li>
        <li>Contact</li>
      </ul>
      <div className="hamburger-icon">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
