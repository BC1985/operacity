import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  let sideNavClass = "nav-links";
  if (props.show) {
    sideNavClass = "nav-links open";
  }
  return (
    <nav className="nav">
      <ul className={sideNavClass}>
        {props.routes.map(route => (
          <li key={route.name}>
            <NavLink to={route.to} onClick={route.onClick}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
