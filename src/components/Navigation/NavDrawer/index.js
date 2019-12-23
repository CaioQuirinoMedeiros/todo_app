import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Logo from "../../Logo";

import { Container, NavBar, NavList, NavItem, ItemLink } from "./styles";

function SideDrawer() {
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
            <NavItem>
              <ItemLink to="/todos" onClick={closeDrawer}>
                Todos
              </ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink to="/profile" onClick={closeDrawer}>
                Account
              </ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink to="/logout" onClick={closeDrawer}>
                Logout
              </ItemLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <ItemLink to="/login" onClick={closeDrawer}>
                Login
              </ItemLink>
            </NavItem>
            <NavItem>
              <ItemLink to="/signup" onClick={closeDrawer}>
                SignUp
              </ItemLink>
            </NavItem>
          </>
        )}
      </NavList>
    </Container>
  );
}

export default SideDrawer;
