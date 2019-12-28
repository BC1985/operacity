import React, { useState } from "react";
import "./SubscribeForm.css";

function SubscribeForm() {
  const [activeNameField, setActiveNameField] = useState(false);
  const [activeEmailField, setActiveEmailField] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  let nameLabelClass = "form-label";
  if (activeNameField) {
    nameLabelClass = "form-label focused";
  }
  let emailLabelClass = "form-label";
  if (activeEmailField) {
    emailLabelClass = "form-label focused";
  }

  const validateInputs = e => {
    e.preventDefault();
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    !email.match(validEmail) ? setEmailError(true) : setEmailError(false);
    const validName = /^[a-zA-Z ]*$/;
    !name.match(validName) || name === ""
      ? setNameError(true)
      : setNameError(false);
  };

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
  // disable button until input fields are populated
  const isDisabled = () => {
    return email.length === 0 || name.length === 0 ? true : false;
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
        <form onSubmit={validateInputs}>
          <label htmlFor="full-name" className={nameLabelClass}>
            Name
          </label>
          <input
            className="form-input"
            type="text"
            value={name}
            name="full_name"
            id="full-name"
            onFocus={() => setActiveNameField(true)}
            onChange={e => setName(e.target.value)}
            onBlur={checkNameInput}
          />
          {nameError ? "Please enter valid name" : ""}

          <label htmlFor="email" className={emailLabelClass}>
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            value={email}
            onFocus={() => setActiveEmailField(true)}
            onBlur={checkEmailInput}
            onChange={e => setEmail(e.target.value)}
          />
          {emailError ? "Please enter valid email" : ""}
        </form>
        <button
          id="submit-button"
          type="submit"
          onClick={validateInputs}
          disabled={isDisabled()}
        >
          Sign me up
        </button>
        <div className="subscribe-push"></div>
      </div>
    </div>
  );
}

export default SubscribeForm;
