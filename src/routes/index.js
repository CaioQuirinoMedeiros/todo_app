import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Guest from "./guest";
import Signed from "./signed";
import Verified from "./verified";

import Todos from "../containers/Todos";
import Login from "../containers/Auth/Login";
import SignUp from "../containers/Auth/SignUp";
import Logout from "../containers/Auth/Logout";
import VerifyEmail from "../containers/Auth/VerifyEmail";
import RecoveryPassword from "../containers/Auth/RecoveryPassword";
import Profile from "../containers/Auth/Profile";

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
