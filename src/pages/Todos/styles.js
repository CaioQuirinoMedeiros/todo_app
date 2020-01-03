import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button as ButtonComponent } from "../../styles/components";

export const Container = styled.div`
  flex: 1;
  align-self: center;
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  min-width: 35rem;
  width: 90vw;
`;

export const AddIcon = styled(FontAwesomeIcon).attrs({
  icon: faPlus
})`
  margin-right: 1rem;
  color: var(--color-white);
`;

export const Button = styled(ButtonComponent)`
  align-self: center;
  background: var(--color-action);
  margin: 3rem 0;
`;

export const TodosContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
