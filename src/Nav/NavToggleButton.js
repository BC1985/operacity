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
        transform: this.state.isOpen ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      lineMiddle: {
        opacity: this.state.isOpen ? 0 : 1,
        transform: this.props.isOpen ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.state.isOpen
          ? "translateX(-1px) rotate(-45deg)"
          : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div>
        <div style={{ ...styles.hamburgerIcon }} onClick={this.openSideNav}>
          <div style={{ ...styles.line, ...styles.lineTop }} />
          <div style={{ ...styles.line, ...styles.lineMiddle }} />
          <div style={{ ...styles.line, ...styles.lineBottom }} />
        </div>
      </div>
    );
  }
}

export default NavToggleButton;
