import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Logo from "../../Logo";

import { Container, NavBar, NavList, ItemLink } from "./styles";

function NavDrawer() {
  const [open, setOpen] = useState(false);
  const signed = useSelector(({ firebase }) => !!firebase.auth.uid);

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <Container>
      <NavBar>
        <Logo />
        <FontAwesomeIcon
          icon={open ? faTimes : faBars}
          onClick={() => setOpen(!open)}
          className="hamburger"
        />
      </NavBar>
      <NavList open={open}>
        {signed ? (
          <>
            <li>
              <ItemLink to="/todos" onClick={closeDrawer}>
                Todos
              </ItemLink>
            </li>
            <li>
              <ItemLink to="/profile" onClick={closeDrawer}>
                Account
              </ItemLink>
            </li>
            <li>
              <ItemLink to="/logout" onClick={closeDrawer}>
                Logout
              </ItemLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <ItemLink to="/login" onClick={closeDrawer}>
                Login
              </ItemLink>
            </li>
            <li>
              <ItemLink to="/signup" onClick={closeDrawer}>
                SignUp
              </ItemLink>
            </li>
          </>
        )}
      </NavList>
    </Container>
  );
}

export default NavDrawer;
