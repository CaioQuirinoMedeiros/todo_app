import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";

import ConfirmationComponent from "../../modals/Confirmation";

export const Confirmation = styled(ConfirmationComponent)`
  position: relative;
  width: 20rem;
  height: 10rem;
`;

export const Card = styled.li`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: ${({ done }) => (done ? 0.85 : 1)};
  transition: all 0.2s;
`;

export const TodoText = styled(TextareaAutosize)`
  flex: 1;
  word-break: break-word;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 1rem;
  min-height: 38px;

  outline: none;
  font-size: 1.4rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ disabled }) =>
    disabled ? "transparent" : "rgba(70, 70, 70, 0.1)"};
  background: var(--color-main);
  color: var(--color-white);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        opacity: 0.9;
        border: 1px solid rgba(70, 70, 70, 0.3);
      }
    `}

  &:focus {
    cursor: text;
    opacity: 0.9;
    border: 1px solid rgba(70, 70, 70, 0.3);
  }
`;

export const DeleteButton = styled.button`
  background: none;
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faTrash,
  size: "lg"
})`
  color: var(--color-red);
  opacity: 0.85;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const CheckInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    height: 2rem;
    width: 2rem;
    position: relative;
    border-radius: 1rem;
    background-color: #eee;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ done }) => (done ? "transparent" : "var(--color-main)")};

    transition: all 0.2s;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background-color: #ddd;
  }

  .checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark::after {
    display: block;
  }

  & .checkmark::after {
    left: 0.65rem;
    top: 0;
    width: 0.5rem;
    height: 1.2rem;
    border: solid var(--color-main);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
