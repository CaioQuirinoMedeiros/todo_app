import React from "react";
import PropTypes from "prop-types";

import NavBar from "../components/Navigation/NavBar";
import NavDrawer from "../components/Navigation/NavDrawer";

import { Container, MainWrapper } from "./styles";

const Layout = ({ children }) => (
  <Container>
    <NavBar />
    <NavDrawer />
    <MainWrapper>{children}</MainWrapper>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.shape()
};

export default Layout;
