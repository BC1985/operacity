import React from "react";
import "./SubscribeForm.css";
function subscribeForm() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <i className="fas fa-theater-masks" id="logo-sm"></i>
        <p>Operacity</p>
      </div>
      <h1>Get notified on upcoming events</h1>
      <div className="form-container">
        <form>
          <label htmlFor="full-name"></label>
          <input type="text" placeholder="Name" />

          <label htmlFor="email"></label>
          <input type="text" placeholder="Email" />
        </form>
        <button id="submit-button">Sign me up</button>
      </div>
    </div>
  );
}

export default subscribeForm;
