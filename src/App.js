import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout";
import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/Auth/Login";
import SignUp from "./containers/Auth/SignUp";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default App;
