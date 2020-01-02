import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Button as ButtonComponent } from "../../styles/components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
`;

export const Title = styled.h1`
  font-weight: 300;
  color: var(--color-ink);
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const SubTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 80rem;
  min-width: 35rem;
  width: 90vw;
  display: flex;
  flex-direction: column;
`;

export const AddIcon = styled(FontAwesomeIcon).attrs({
  icon: faPlus
})`
  margin-right: 1rem;
  color: var(--color-white);
`;

export const Button = styled(ButtonComponent)`
  align-self: flex-end;
`;

export const TodosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
