import React from "react";
import { useSelector } from "react-redux";

import Layout from "./layout";
import Routes from "./routes";

function App() {
  const auth = useSelector(({ firebase }) => firebase.auth);

  console.log(auth);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
