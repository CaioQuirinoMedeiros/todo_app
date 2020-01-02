import React from "react";

import NavBar from "../components/Navigation/NavBar";
import NavDrawer from "../components/Navigation/NavDrawer";

import { Container, MainWrapper } from "./styles";

function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <NavDrawer />
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
}

export default Layout;
