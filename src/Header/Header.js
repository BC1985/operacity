import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";
import SocialMedia from "../Social media icons/SocialMedia";
function Header() {
  const mainContent = [
    {
      header: "Culture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      img: "https://i.picsum.photos/id/24/4855/1803.jpg"
    },
    {
      header: "Enrichment",
      content:
        "Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

      img: "https://i.picsum.photos/id/304/6016/4000.jpg"
    },
    {
      header: "Community",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      img: "https://i.picsum.photos/id/192/2352/2352.jpg"
    }
  ];

  const main = mainContent.map((item, index) => {
    return (
      <div key={index}>
        <h2 style={{ textAlign: "center" }} className="main-item-header">
          {item.header}
        </h2>
        <div className="main-item-container" key={index}>
          <img src={item.img} alt={item.header} className="pic" />
          <div className="blurb-overlay">
            <p className="image-blurb">{item.content}</p>
          </div>
        </div>
        <div />
      </div>
    );
  });

  return (
    <div>
      <div className="header">
        <div className="header-content">
          <Logo />
          <p className="logo-tagline">Puccini the envelope since 2010</p>

          <NavLink to="/subscribe">
            <button className="btn">Subscribe</button>
          </NavLink>
          <SocialMedia />
        </div>
      </div>
      <div className="landing-page-main">
        <div className="quote-wrapper">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <p style={{ marginLeft: "10px" }}>-Lorem Ipsum</p>
        </div>
        {main}
      </div>
    </div>
  );
}

export default Header;
