import React, { useContext, useState } from "react";
import "./Date.css";
import { OperaContext } from "../OperaContext";
import { Redirect } from "react-router-dom";
import BackIcon from "../BackIcon/BackIcon";

function Date() {
  const [selectedShow, setSelectedShow] = useState([]);
  const { programInfo } = useContext(OperaContext);
  const info = programInfo.map((info, index) => (
    <div className="info-container" key={index}>
      <p className="show-date">{info.date}</p>
      <div className="main-info">
        <h3 className="composer">{info.composer}</h3>
        <h2 className="opera-name">{info.operaName}</h2>
        <p className="show-time">{info.time}</p>
        <p className="soloists">{info.soloists}</p>
        <div
          className="tickets-btn"
          onClick={() =>
            setSelectedShow(() => [
              ...selectedShow,
              info.operaName,
              info.composer,
              info.date,
              info.time,
              info.image
            ])
          }
        >
          Get tickets
        </div>
        {selectedShow.length > 0 && (
          <Redirect
            to={{
              pathname: "/tickets",
              selectedShow
            }}
          />
        )}
        <hr />
      </div>
    </div>
  ));

  return (
    <div className="program-wrapper">
      <div className="program-header">
        <h1>December 2019</h1>
      </div>
      <div className="program-title">
        <h1>Program</h1>
      </div>
      <div className="schedule-container">{info}</div>
      <div className="program-shape"></div>
      <BackIcon />
    </div>
  );
}

export default Date;
