import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Card = styled.li`
  max-width: 80rem;
  min-width: 50rem;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props =>
    props.done ? "rgba(47, 130, 184, 0.4)" : "var(--color-mainLighter)"};
  border-radius: 5px;
  transition: all 0.2s;
`;

export const TodoText = styled.div`
  flex: 1;
  min-height: 1.8rem;
  word-break: break-word;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 1rem;

  outline: none;
  font-size: 1.2rem;
  border: 1px solid transparent;
  border: 1px solid rgba(0, 0, 0, 0.075);
  color: ${props =>
    props.contentEditable ? "var(--color-white)" : "rgba(255,255,255,0.5)"};
  cursor: ${props => (props.contentEditable ? "pointer" : "default")};
  transition: all 0.2s;

  ${props =>
    props.contentEditable
      ? `&:hover {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }`
      : ""}

  &:focus {
    cursor: text;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const DeleteButton = styled.button`
  background: none;
`;

export const Icon = styled(FontAwesomeIcon).attrs({
  icon: faTrash,
  size: "lg"
})`
  color: var(--color-mainDark);
  opacity: 0.85;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const CheckInput = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    background-color: #eee;

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
    top: 0.2rem;
    width: 0.5rem;
    height: 1.2rem;
    border: solid var(--color-mainDark);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
