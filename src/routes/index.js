import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Guest from "./guest";
import Signed from "./signed";
import Verified from "./verified";

import Todos from "../pages/Todos";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Logout from "../pages/Logout";
import VerifyEmail from "../pages/VerifyEmail";
import RecoveryPassword from "../pages/RecoveryPassword";
import Profile from "../pages/Profile";

function Routes() {
  return (
    <Switch>
      <Guest exact path="/login" component={Login} />
      <Guest exact path="/signup" component={SignUp} />
      <Guest exact path="/recovery" component={RecoveryPassword} />
      <Signed exact path="/verify-email" component={VerifyEmail} />
      <Signed exact path="/profile" component={Profile} />
      <Signed exact path="/logout" component={Logout} />
      <Verified exact path="/todos" component={Todos} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
