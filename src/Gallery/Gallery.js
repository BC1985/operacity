import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

export const urls = [
  {
    url: "https://live.staticflickr.com/65535/47710839562_0574dfd097_z.jpg",
    desc: "opera1"
  },
  {
    url:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/69/50/2f.jpg",
    desc: "opera2"
  },
  {
    url:
      "https://cdn.britannica.com/14/166714-050-454513F5/Performance-trovatore-Il-Giuseppe-Verdi-2011.jpg",
    desc: "opera3"
  },
  {
    url:
      "https://www.airfrance.co.uk/GB/common/common/img/tbaf/news/NCE/l-opera-de-nice-la-traviatta-dans-son-decor-d-origine/NCE-l-opera-de-nice-la-traviatta-dans-son-decor-d-origine-2_1-1024x512.jpg",
    desc: "opera4"
  }
];
function Gallery() {
  const thumbnails = urls.map(thumbnail => (
    <div key={thumbnail.desc}>
      <Link to={`/gallery/${thumbnail.desc}`}>
        <img
          src={thumbnail.url}
          alt={thumbnail.desc}
          style={{ marginBottom: "20px" }}
        />
      </Link>
    </div>
  ));
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery">Gallery</h1>
      <div className="thumbnails-container">{thumbnails}</div>
    </div>
  );
}

export default Gallery;
