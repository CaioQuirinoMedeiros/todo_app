import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 40rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  background: var(--color-main);
`;

export const Message = styled.p`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-white);
`;

export const Button = styled.button`
  padding: 0 2rem;
  height: 4rem;
  margin-top: 1rem;
  border-radius: 2rem;

  background: ${props =>
    props.color ? props.color : "var(--color-mainLight)"};
  opacity: ${props => (props.color ? 0.8 : 1)};
  color: var(--color-white);
  font-size: 1.4rem;
  letter-spacing: 1.1px;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  transition: all 0.2s;

  &:hover {
    background: ${props =>
      props.color ? props.color : "var(--color-mainLighter)"};
    opacity: 1;
  }
`;
