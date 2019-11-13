import React from "react";
import "./Gallery.css";
import Thumbnail from "../Thumbnail/Thumbnail";

function Gallery() {
  let urls = [
    "https://live.staticflickr.com/65535/47710839562_0574dfd097_z.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/69/50/2f.jpg",
    "https://cdn.britannica.com/14/166714-050-454513F5/Performance-trovatore-Il-Giuseppe-Verdi-2011.jpg",
    "https://www.airfrance.co.uk/GB/common/common/img/tbaf/news/NCE/l-opera-de-nice-la-traviatta-dans-son-decor-d-origine/NCE-l-opera-de-nice-la-traviatta-dans-son-decor-d-origine-2_1-1024x512.jpg"
  ];
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery">Gallery</h1>
      <div className="thumbnails-container">
        {urls.map(thumbnail => (
          <Thumbnail image={thumbnail} key={thumbnail} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
