import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layout';
import Home from './containers/Home';
import Todos from './containers/Todos';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={Todos} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default App;
