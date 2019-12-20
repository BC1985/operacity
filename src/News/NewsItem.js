import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "./newsData";

function NewsItem() {
  const { newsItemId } = useParams();

  const containerStyle = {
    padding: "5% 15%"
  };

  const imgStyle = {
    border: "4px solid black",
    width: "100%"
  };

  const headingStyle = {
    fontSize: "1.4em"
  };

  const textStyle = {
    color: "gray",
    fontSize: "0.6em",
    lineHeight: "1.5em"
  };
  const description = {
    color: "gray",
    fontStyle: "italic",
    fontSize: "0.6em",
    marginBlockStart: "0"
  };

  const MainItem = () => {
    const newsItem = newsItems.find(item => item.id == newsItemId);
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}> {newsItem.heading}</h1>
        <img src={newsItem.img} alt={newsItem.heading} style={imgStyle} />
        <p style={description}>{newsItem.imageDescription}</p>
        <h2 style={{ fontSize: "1em" }}>{newsItem.blurb}</h2>
        <p style={textStyle}>{newsItem.content}</p>
      </div>
    );
  };
  return (
    <>
      <div style={containerStyle}>
        <MainItem />
      </div>
    </>
  );
}

export default NewsItem;
