import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Guest({ component: Component, ...rest }) {
  const signed = useSelector(({ firebase }) => !!firebase.auth.uid);
  const verified = useSelector(({ firebase }) => !!firebase.auth.emailVerified);

  return (
    <Route
      {...rest}
      render={props =>
        signed ? (
          verified ? (
            <Redirect to="/todos" />
          ) : (
            <Redirect to="/verify-email" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default Guest;
