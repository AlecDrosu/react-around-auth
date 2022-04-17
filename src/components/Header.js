import React from "react";
import { Route, Navigate, Routes, Link } from "react-router-dom";
import vector from "../images/Vector.svg";

export default function Header({ onSignOut, email }) {
  function handleSignOut() {
    onSignOut();
  }
  return (
    <header className="header">
      <img src={vector} alt="AroundUS" className="header__logo" />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="header__email">
              <p className="header__email-text">{email}</p>
            </div>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Link to="/signin" className="header__auth-link">
              Log in
            </Link>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <Link to="/signup" className="header__auth-link">
              Sign up
            </Link>
          }
        ></Route>
      </Routes>
    </header>
  );
}
