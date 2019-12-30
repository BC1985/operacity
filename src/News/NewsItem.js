import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "./newsData";
import "./NewsItem.css";
import BackIcon from "../BackIcon/BackIcon";

function NewsItem() {
  const { newsItemId } = useParams();

  const MainItem = () => {
    const newsItem = newsItems.find(item => item.id == newsItemId);
    return (
      <div className="news-item-container">
        <h1 className="news-item-heading"> {newsItem.heading}</h1>
        <h2 className="news-item-blurb">{newsItem.blurb}</h2>
        <img
          src={newsItem.img}
          alt={newsItem.heading}
          className="news-item-img"
        />
        <p className="news-item-description ">{newsItem.imageDescription}</p>
        <p className="news-item-content">{newsItem.content}</p>
        <BackIcon />
      </div>
    );
  };
  return (
    <>
      <MainItem />
    </>
  );
}

export default NewsItem;
