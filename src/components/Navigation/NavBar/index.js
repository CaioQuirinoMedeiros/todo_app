import React from "react";
import { useSelector } from "react-redux";

import Logo from "../../Logo";

import { Container, NavList, ItemLink } from "./styles";

function NavBar() {
  const signed = useSelector(({ firebase }) => !!firebase.auth.uid);

  return (
    <Container>
      <Logo />
      <NavList>
        {signed ? (
          <>
            <li>
              <ItemLink to="/todos">Todos</ItemLink>
            </li>
            <li>
              <ItemLink to="/profile">Account</ItemLink>
            </li>
            <li>
              <ItemLink to="/logout">Logout</ItemLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <ItemLink to="/login">Login</ItemLink>
            </li>
            <li>
              <ItemLink to="/signup">SignUp</ItemLink>
            </li>
          </>
        )}
      </NavList>
    </Container>
  );
}
export default NavBar;
