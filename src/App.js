import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./layout";
import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/Auth/Login";
import SignUp from "./containers/Auth/SignUp";
import Logout from "./containers/Auth/Logout";
import VerifyEmail from "./containers/Auth/VerifyEmail";
import RecoveryPassword from "./containers/Auth/RecoveryPassword";
import Profile from "./containers/Auth/Profile";

const App = ({ loggedIn, emailVerified }) => {
  const routes = loggedIn ? (
    emailVerified ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    )
  ) : (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/recovery" component={RecoveryPassword} />
      <Redirect to="/login" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: !!firebase.auth.uid,
  emailVerified: !!firebase.auth.emailVerified
});

export default connect(
  mapStateToProps,
  null
)(App);
