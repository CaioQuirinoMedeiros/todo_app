import React from "react";

import Logo from "../../Logo";

import { Container, NavList, NavItem, ItemLink } from "./styles";

const NavBar = () => (
  <Container>
    <Logo />
    <NavList>
      <NavItem>
        <ItemLink exact to="/">
          Home
        </ItemLink>
      </NavItem>
      <NavItem>
        <ItemLink to="/todos">Todos</ItemLink>
      </NavItem>
    </NavList>
  </Container>
);

export default NavBar;
