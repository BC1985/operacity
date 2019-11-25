import React from "react";
import "./Date.css";
function Date(props) {
  const info = props.programInfo.map((info, index) => (
    <div className="info-container" key={index}>
      <p className="date">{info.date}</p>
      <div className="main-info">
        <h3 className="composer">{info.composer}</h3>
        <h2 className="opera-name">{info.operaName}</h2>
        <p className="time">{info.time}</p>
        <p className="soloists">{info.soloists}</p>
        <button className="tickets-btn">Get tickets</button>
        <hr />
      </div>
    </div>
  ));
  return (
    <div className="date-wrapper">
      <div className="program-header">
        <h1>December 2019</h1>
      </div>
      {info}
      <div className="program-shape"></div>
    </div>
  );
}

export default Date;
