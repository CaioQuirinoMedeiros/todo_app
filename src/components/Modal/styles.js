import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ opacity }) => `rgba(0, 0, 0, ${opacity})`};
  z-index: 99;
`;
