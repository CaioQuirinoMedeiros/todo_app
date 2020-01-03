import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Message = styled.p`
  position: absolute;
  bottom: 110%;
  left: 110%;
  font-weight: bold;
  color: var(--color-white);
  font-size: 1.2rem;
  width: 15rem;
  padding: 0.5rem;
  border-radius: 10rem;
  background: var(--color-action);
  box-shadow: 0 0 4px -1px #999;
  transition: all 0.2s;

  :hover {
    background: ${({ theme }) => lighten(0.1, theme.colors.action)};
  }
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faTrash,
})`
  cursor: pointer;
  font-size: 1.8rem;
  color: var(--color-red);
  opacity: 0.85;
  transition: color 0.2s;

  &:hover {
    opacity: 1;
  }

  ${({ open }) =>
    open &&
    css`
      color: ${({ theme }) => darken(0.05, theme.colors.action)};
      -webkit-animation: vibrate-1 0.3s linear infinite both;
      animation: vibrate-1 0.3s linear infinite both;
    `}
`;
