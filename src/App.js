import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./layout";
import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/Auth/Login";
import SignUp from "./containers/Auth/SignUp";

const App = ({ loggedIn }) => {
  const routes = loggedIn ? (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={Todos} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: !!firebase.auth.uid
});

export default connect(
  mapStateToProps,
  null
)(App);
