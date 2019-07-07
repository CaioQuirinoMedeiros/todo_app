import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 6rem;
  padding: 0 2rem;

  background-color: var(--color-main);

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;

  .hamburger {
    color: #fff;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const NavList = styled.ul`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  border-top: 1px solid var(--color-white);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: translateY(${props => (props.isOpen ? "0%" : "-100%")});
  z-index: 10;
  background-color: var(--color-main);
  transition: all 0.2s;
`;

export const NavItem = styled.li`
  display: flex;
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-bottom: 2px solid transparent;

  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid var(--color-white);
  }

  &.active {
    border-bottom: 2px solid var(--color-white);
  }
`;
