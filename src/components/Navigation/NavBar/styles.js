import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  background-color: var(--color-main);
  z-index: 99;

  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  margin-left: 0.1rem;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;

  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: 3px solid var(--color-white);
  }

  &.active {
    border-bottom: 3px solid var(--color-white);
  }
`;
