import React from "react";
import { Route, Navigate, Link } from "react-router-dom";
import * as auth from "../auth";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] =
    React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState("");
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .authorize(email, password)
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
      <h1 className="login__title">Sign up</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__button" type="submit">
          Sign up
        </button>
      </form>
      <div className="login__signup">
        Already a member?
        <Link to="/signin" className="login__signup-link">
          {" "}
          Log in here!
        </Link>
      </div>
    </div>
  );
}

export default Register;
