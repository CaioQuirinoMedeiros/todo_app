import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Verified({ component: Component, ...rest }) {
  const verified = useSelector(({ firebase }) => !!firebase.auth.emailVerified);
  return (
    <Route
      {...rest}
      render={props =>
        verified ? <Component {...props} /> : <Redirect to="/verifyEmail" />
      }
    />
  );
}

export default Verified;
