import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SubscribeForm.css";
import BackIcon from "../BackIcon/BackIcon";
import Spinner from "../Spinner/Spinner";
import Logo from "../Logo/Logo";
function SubscribeForm() {
  const [activeNameField, setActiveNameField] = useState(false);
  const [activeEmailField, setActiveEmailField] = useState(false);
  const [isEmailError, setisEmailError] = useState(false);
  const [isNameError, setisNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();
  let nameLabelClass = "form-label";
  if (activeNameField) {
    nameLabelClass = "form-label focused";
  }
  let emailLabelClass = "form-label";
  if (activeEmailField) {
    emailLabelClass = "form-label focused";
  }

  const validateName = e => {
    setName(e.target.value);
    const validName = /^[a-zA-Z ]*$/;
    !name.match(validName) || name === ""
      ? setisNameError(true)
      : setisNameError(false);
  };

  const validateEmail = e => {
    setEmail(e.target.value);
    const validEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    !email.match(validEmail) ? setisEmailError(true) : setisEmailError(false);
  };
  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };
  const buttonText = !isLoading ? "Sign me up" : "Please wait...";
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
    return email.length === 0 ||
      name.length === 0 ||
      isLoading ||
      isEmailError ||
      isNameError
      ? true
      : false;
  };
  const errorStyle = {
    fontSize: "0.8em",
    fontStyle: "italic"
  };
  return (
    <div className="wrapper">
      <Logo />
      <div className="subscribe-header">
        <h1>Get notified on upcoming events</h1>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
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
            onChange={validateName}
            onBlur={checkNameInput}
          />
          <p style={errorStyle}>
            {isNameError ? "Please enter valid name" : ""}
          </p>

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
            onChange={validateEmail}
          />
          <p style={errorStyle}>
            {isEmailError ? "Please enter valid email" : ""}
          </p>
        </form>
        <button
          id="submit-button"
          type="submit"
          onClick={onSubmit}
          disabled={isDisabled()}
        >
          {buttonText}
          {isLoading && <Spinner />}
        </button>
        <BackIcon />
      </div>
    </div>
  );
}

export default SubscribeForm;
