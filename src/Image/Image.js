import React from "react";
import { useParams } from "react-router-dom";
import { urls } from "../Gallery/Gallery";

const Image = () => {
  const { image } = useParams();
  const thisImage = urls.find(img => img.desc === image);

  return (
    <div className="single-image">
      <img src={thisImage.url} alt={thisImage.desc} />
    </div>
  );
};

export default Image;
