import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

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
    const { loggedIn } = this.props;

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
          {loggedIn ? (
            <>
              <NavItem>
                <ItemLink to="/todos" onClick={this.toggleList}>
                  Todos
                </ItemLink>
              </NavItem>
              <NavItem>
                <ItemLink to="/logout" onClick={this.toggleList}>
                  Logout
                </ItemLink>
              </NavItem>
            </>
          ) : (
            <>
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
            </>
          )}
        </NavList>
      </Container>
    );
  }
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: !!firebase.auth.uid
});

export default connect(
  mapStateToProps,
  null
)(SideDrawer);
