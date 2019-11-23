import React from "react";
import { NavLink } from "react-router-dom";
import "./LandscapeNav.css";

const LandscapeNav = props => {
  return (
    <>
      <nav className="landscape-nav">
        <ul className="landscape-nav-links">
          {props.routes.map(route => (
            <li key={route.name}>
              <NavLink to={route.to} onClick={route.onClick}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LandscapeNav;
