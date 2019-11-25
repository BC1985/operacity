import React from "react";
import "./Date.css";
function Date(props) {
  const info = props.programInfo.map((info, index) => (
    <div className="info" key={index}>
      <h1 className="date">{info.date}</h1>
      <p>{info.operaName}</p>
      <p>{info.time}</p>
      <p>{info.soloists}</p>
      <hr />
    </div>
  ));
  return <div className="date-wrapper">{info}</div>;
}

export default Date;
