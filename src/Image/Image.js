import React from "react";
import { useParams } from "react-router-dom";
import { urls } from "../Gallery/Gallery";
import "./Image.css";
import BackIcon from "../BackIcon/BackIcon";

const Image = () => {
  const { image } = useParams();
  const thisImage = urls.find(img => img.desc === image);

  return (
    <div className="single-image-wrapper">
      <div className="single-image">
        <img src={thisImage.url} alt={thisImage.desc} />
        <BackIcon />
      </div>
    </div>
  );
};

export default Image;
