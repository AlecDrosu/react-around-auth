// create the Login component, the component for user authorization with the necessary state variables
import React from "react";
import { Route, Navigate, Link } from "react-router-dom";
import * as auth from "../auth";

function Login() {
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
      <h1 className="login__title">Log in</h1>
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
          Submit
        </button>
      </form>
      <button className="login__button">Log in</button>
      <div className="login__signup">
        Not a member yet?
        <Link to="/signup">Sign up here!</Link>
      </div>
    </div>
  );
}

export default Login;
