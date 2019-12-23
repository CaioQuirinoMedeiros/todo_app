import React from "react";
import { useSelector} from 'react-redux'

import Logo from "../../Logo";

import { Container, NavList, NavItem, ItemLink } from "./styles";

function NavBar() {
  const signed = useSelector(({ firebase }) => !!firebase.auth.uid)

  return (
    <Container>
      <Logo />
      <NavList>
        {signed ? (
          <>
            <NavItem>
              <ItemLink to="/todos">Todos</ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink to="/profile">Account</ItemLink>
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
}
export default NavBar;
