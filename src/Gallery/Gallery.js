import React from "react";
import "./Gallery.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import opera from "../Images/images.jpeg";
import verdi from "../Images/verdi.jpg";
import ensemble from "../Images/opera2.jpg";

function Gallery(props) {
  return (
    <div className="wrapper">
      <h1 className="gallery">Gallery</h1>
      <div className="thumbnails-container">
        <Thumbnail image={opera} />
        <Thumbnail image={verdi} />
        <Thumbnail image={ensemble} />
      </div>
    </div>
  );
}

export default Gallery;
