import React from "react";
import { Route, Navigate } from "react-router-dom";
import * as auth from "../auth";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] =
    React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .register(email, password)
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          setEmail(data.email);
          setPassword("");
          setIsPopupWithConfirmOpen(false);
          setTooltipStatus("");
          setIsInfoTooltipOpen(false);
        } else {
          setIsPopupWithConfirmOpen(true);
          setTooltipStatus("");
          setIsInfoTooltipOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Register</h1>
        <form className="login__form" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
