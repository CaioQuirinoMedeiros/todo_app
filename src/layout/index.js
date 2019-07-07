import React from "react";

import NavBar from "../components/Navigation/NavBar/index.js";

import { MainWrapper } from "./styles";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
