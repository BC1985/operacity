import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { newsItems } from "./newsData";

const mainItems = newsItems.filter(item => item.id % 2 === 0);
const sideItems = newsItems.filter(item => item.id % 2 !== 0);

const items = mainItems.map(item => (
  <div className="item-container" key={item.id}>
    <Link to={`/news/${item.id}`}>
      <h2>{item.heading}</h2>
      <img src={item.img} alt={item.heading} id="news-img" />
      <p className="blurb">{item.blurb}</p>
      <p className="img-description">{item.description}</p>
      <p className="content">{item.content}</p>
    </Link>
  </div>
));
const sideStories = sideItems.map(item => (
  <div className="side-item-container" key={item.id}>
    <Link to={`/news/${item.id}`}>
      <img src={item.img} alt={item.heading} id="news-img" />

      <h2>{item.heading}</h2>
      <p className="side-blurb">{item.blurb}</p>
      <p className="side-img-description">{item.description}</p>
      <p className="side-content">{item.content}</p>
    </Link>
  </div>
));

function News() {
  return (
    <div className="news-wrapper">
      <div className="news-title">
        <h1>News</h1>
      </div>
      <div className="main-stories">{items}</div>
      <div className="side">{sideStories}</div>
    </div>
  );
}

export default News;
