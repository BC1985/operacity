import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <Logo />
          <p className="logo-tagline">Puccini the envelope since 2010</p>

          <NavLink to="/subscribe">
            <button className="btn">Subscribe</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
