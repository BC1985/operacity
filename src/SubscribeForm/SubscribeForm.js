import React, { useState } from "react";
import "./SubscribeForm.css";

function SubscribeForm() {
  const [activeNameField, setActiveNameField] = useState(false);
  const [activeEmailField, setActiveEmailField] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  let nameLabelClass = "form-label";
  if (activeNameField) {
    nameLabelClass = "form-label focused";
  }
  let emailLabelClass = "form-label";
  if (activeEmailField) {
    emailLabelClass = "form-label focused";
  }

  const checkEmailInput = e => {
    if (e.target.value !== "") {
      setActiveEmailField(true);
    } else {
      setActiveEmailField(false);
    }
  };
  const checkNameInput = e => {
    if (e.target.value !== "") {
      setActiveNameField(true);
    } else {
      setActiveNameField(false);
    }
  };
  return (
    <div className="wrapper">
      <div className="logo-container">
        <i className="fas fa-theater-masks" id="logo-sm"></i>
        <p>Operacity</p>
      </div>
      <div className="subscribe-header">
        <div className="square"></div>
        <h1>Get notified on upcoming events</h1>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="full-name" className={nameLabelClass}>
            Name
          </label>
          <input
            className="form-input"
            type="text"
            name="full_name"
            id="full-name"
            onFocus={() => setActiveNameField(true)}
            onChange={handleInputChange}
            // onBlur={() => setActiveNameField(false)}
            onBlur={checkNameInput}
          />

          <label htmlFor="email" className={emailLabelClass}>
            Email
          </label>

          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            onFocus={() => setActiveEmailField(true)}
            onBlur={checkEmailInput}
            // onBlur={() => setActiveEmailField(false)}
            onChange={handleInputChange}
          />
        </form>
        <button id="submit-button">Sign me up</button>
      </div>
    </div>
  );
}

export default SubscribeForm;
