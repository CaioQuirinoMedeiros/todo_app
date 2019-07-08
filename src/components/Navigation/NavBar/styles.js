import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  padding: 1.4rem;
  border-bottom: 3px solid transparent;

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
