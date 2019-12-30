import React from "react";
import "./BackIcon.css";
import { useHistory } from "react-router-dom";

function BackIcon() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="back-icon" onClick={goBack}>
      <i className="far fa-hand-point-left"></i>
      <p>Back</p>
    </div>
  );
}

export default BackIcon;
