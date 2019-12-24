import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;

  background: var(--color-mainLight);
  color: var(--color-white);
`;

export const Title = styled.h1`
  font-weight: 300;
  color: var(--color-white);
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const SubTitle = styled.p`
  margin-bottom: 1rem;
  color: var(--color-white);
  font-size: 1.4rem;
  text-align: center;
`;
