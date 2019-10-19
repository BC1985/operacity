import React from "react";
import "./NavToggleButton.css";

function NavToggleButton(props) {
  return (
    <div id="hamburger-icon" onClick={props.openSideNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default NavToggleButton;
