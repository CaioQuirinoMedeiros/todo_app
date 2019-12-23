import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Signed({ component: Component, ...rest }) {
  const signed = useSelector(({ firebase }) => !!firebase.auth.uid);
  return (
    <Route
      {...rest}
      render={props =>
        signed ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default Signed;
