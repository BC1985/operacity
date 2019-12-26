import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

export const urls = [
  {
    url: "https://i.picsum.photos/id/508/2955/3892.jpg",
    desc: "opera1"
  },
  {
    url: "https://picsum.photos/id/832/5472/3648",
    desc: "opera2"
  },
  {
    url: "https://i.picsum.photos/id/834/3644/5466.jpg",
    desc: "opera3"
  },
  {
    url: "https://picsum.photos/id/836/5184/3456",
    desc: "opera4"
  },
  {
    url: "https://i.picsum.photos/id/209/1920/1280.jpg",

    desc: "opera5"
  },
  {
    url: "https://picsum.photos/id/76/4912/3264",

    desc: "opera6"
  },
  {
    url: "https://i.picsum.photos/id/1033/2048/1365.jpg",

    desc: "opera7"
  },
  {
    url: "https://i.picsum.photos/id/1054/3079/1733.jpg",
    desc: "opera8"
  },
  {
    url: "https://i.picsum.photos/id/1059/7360/4912.jpg",
    desc: "opera9"
  },
  {
    url: "https://i.picsum.photos/id/320/2689/1795.jpg",
    desc: "opera10"
  },
  {
    url: "https://i.picsum.photos/id/1082/5416/3611.jpg",
    desc: "opera11"
  },
  {
    url: "https://i.picsum.photos/id/117/1544/1024.jpg",
    desc: "opera12"
  }
];

const getClass = i => {
  return i % 2 === 0 ? "-tall" : "-normal";
};
const Gallery = () => {
  const thumbnails = urls.map((thumbnail, i) => (
    <div key={thumbnail.desc} className={`img-container${getClass(i)}`}>
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
};

export default Gallery;
