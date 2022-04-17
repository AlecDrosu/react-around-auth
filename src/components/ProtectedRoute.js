import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children, loggedIn, ...props }) {
  return (
    // <Route
    //   {...props}
    //   render={() => (loggedIn ? children : <Navigate to="/signin" />)}
    // />
    <Route {...props}>{loggedIn ? children : <Navigate to="/signin" />}</Route>
  );
};

export default ProtectedRoute;

{
  /* <Route
{...props}
render={() => (loggedIn ? children : <Navigate to="/signin" />)}
/> */
}

{
  /* <Routes>
<Route
  {...props}
  render={({ location }) =>
    loggedIn ? (
      children
    ) : (
      <Navigate to={{ pathname: "/signin", state: { from: location } }} />
    )
  }
/>
</Routes> */
}
