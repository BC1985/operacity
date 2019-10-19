import React from "react";
import "./NavToggleButton.css";

function NavToggleButton(props) {
  return (
    <div className="hamburger-icon" onClick={props.openSideNav}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
}

export default NavToggleButton;
