import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 0 2rem;

  background-color: var(--color-main);

  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0 1rem;
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
