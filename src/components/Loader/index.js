import React from "react";

import { Container, LoaderComponent } from "./styles";

const Loader = () => (
  <Container>
    <LoaderComponent className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </LoaderComponent>
  </Container>
);
export default Loader;
