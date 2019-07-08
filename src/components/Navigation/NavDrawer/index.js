import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Logo";

import { Container, NavBar, NavList, NavItem, ItemLink } from "./styles";

class SideDrawer extends Component {
  state = {
    isOpen: false
  };

  toggleList = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Container>
        <NavBar>
          <Logo />
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            onClick={this.toggleList}
            className="hamburger"
          />
        </NavBar>
        <NavList isOpen={isOpen}>
          <NavItem>
            <ItemLink exact to="/" onClick={this.toggleList}>
              Home
            </ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/todos" onClick={this.toggleList}>
              Todos
            </ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/login" onClick={this.toggleList}>
              Login
            </ItemLink>
          </NavItem>
          <NavItem>
            <ItemLink to="/signup" onClick={this.toggleList}>
              SignUp
            </ItemLink>
          </NavItem>
        </NavList>
      </Container>
    );
  }
}

export default SideDrawer;
