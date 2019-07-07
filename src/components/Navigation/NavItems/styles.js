import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;

  a {
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
  }
`;
