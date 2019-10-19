import React, { Component } from "react";
import "./NavToggleButton.css";

class NavToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  openSideNav = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };
  render() {
    const styles = {
      hamburgerIcon: {
        position: "absolute",
        padding: "20px",
        zIndex: 2,
        cursor: "pointer"
      },
      line: {
        height: "3px",
        width: "20px",
        background: "white",
        transition: "all 0.3s ease"
      },
      lineTop: {
        transform: this.props.isSideNavOpen ? "rotate(50deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.props.isSideNavOpen ? 0 : 1,
        transform: this.props.isSideNavOpen ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.props.isSideNavOpen
          ? "translateX(-1px) rotate(-50deg)"
          : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div>
        <div id="hamburger-icon" onClick={this.props.openSideNav}>
          <div style={{ ...styles.line, ...styles.lineTop }} />
          <div style={{ ...styles.line, ...styles.lineMiddle }} />
          <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
      </div>
    );
  }
}

export default NavToggleButton;
