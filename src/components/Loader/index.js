import React from "react";

import { Spinner } from "./styles";

function Loader(props) {
  return (
    <Spinner className="lds-ring" {...props}>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  );
}

export default Loader;
