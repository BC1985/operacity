import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <ul className="col-1">
        <li>Contact</li>
        <li>Program</li>
        <li>News</li>
        <li>Gallery</li>
      </ul>
      <ul className="col-2">
        <li>Donate</li>
        <li>Volunteer</li>
        <li>Host</li>
        <li>Join</li>
      </ul>
      <ul className="social-media-footer">
        <li>
          <i className="fab fa-twitter" id="twitter-icon"></i>
        </li>
        <li>
          <i className="fab fa-facebook-square" id="facebook-icon"></i>
        </li>
        <li>
          <i className="fab fa-instagram" id="instagram-icon"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
