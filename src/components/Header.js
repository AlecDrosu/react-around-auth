import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
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
      </Routes>
    </header>
  );
}
