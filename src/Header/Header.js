import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <div className="logo-container">
            <i className="fas fa-theater-masks" id="logo"></i>
          </div>
          <h1>Operacity</h1>
          <p>It isn't over 'till the fat lady sings</p>
          <NavLink to="/subscribe">
            <button className="btn">Subscribe</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
