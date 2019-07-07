import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
