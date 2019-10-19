import React from "react";
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

          <a href="#404" className="btn">
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
