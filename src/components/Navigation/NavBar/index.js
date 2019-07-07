import React, { Component } from "react";

import Logo from "../../Logo";
import NavItems from "../NavItems";

import { Container } from "./styles";

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <NavItems />
      </Container>
    );
  }
}

export default NavBar;
