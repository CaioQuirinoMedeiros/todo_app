import styled from "styled-components";

export default styled.button`
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
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    background: #444;
    cursor: not-allowed;
  }
`;
