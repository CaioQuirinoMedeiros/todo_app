import React from "react";
import PropTypes from "prop-types";

import NavBar from "../components/Navigation/NavBar";
import NavDrawer from "../components/Navigation/NavDrawer";

import { MainWrapper } from "./styles";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <NavDrawer />
    <MainWrapper>{children}</MainWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.shape()
};

export default Layout;
