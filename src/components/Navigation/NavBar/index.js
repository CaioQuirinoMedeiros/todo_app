import React from "react";
import { connect } from "react-redux";

import Logo from "../../Logo";

import { Container, NavList, NavItem, ItemLink } from "./styles";

const NavBar = ({ loggedIn }) => (
  <Container>
    <Logo />
    <NavList>
      {loggedIn ? (
        <>
          <NavItem>
            <ItemLink exact to="/">
              Home
            </ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/todos">Todos</ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/profile">Profile</ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/logout">Logout</ItemLink>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <ItemLink to="/login">Login</ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/signup">SignUp</ItemLink>
          </NavItem>
        </>
      )}
    </NavList>
  </Container>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: !!firebase.auth.uid
});

export default connect(
  mapStateToProps,
  null
)(NavBar);
