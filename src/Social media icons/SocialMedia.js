import React from "react";
import "./SocialMedia.css";
const SocialMedia = () => {
  return (
    <ul className="social-media-icons">
      <li>
        <i className="fab fa-twitter icon" id="twitter-icon"></i>
      </li>
      <li>
        <i className="fab fa-facebook-square icon" id="facebook-icon"></i>
      </li>
      <li>
        <i className="fab fa-instagram icon" id="instagram-icon"></i>
      </li>
    </ul>
  );
};

export default SocialMedia;
