import styled from "styled-components";
import { Form as FormikForm, Field, ErrorMessage as FormikError } from "formik";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Form = styled(FormikForm)`
  width: 58rem;
  margin: 0 1rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--color-main);
  box-shadow: 0rem 0.5rem 3.5rem rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
    margin: 0 1rem;
    padding: 3rem;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  color: var(--color-white);
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1.1px;
  text-transform: uppercase;
`;

export const SubTitle = styled.h2`
  margin-bottom: 1rem;
  font-weight: 300;
  color: var(--color-white);
  font-size: 1.4rem;
  text-align: center;
`;

export const Input = styled(Field)`
  padding: 0 2rem;
  height: 4rem;
  margin-top: 1rem;
  border-radius: 2rem;

  background: var(--color-mainDark);
  color: var(--color-white);
  font-weight: 400;
  font-size: 1.5rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active,
  &:-webkit-autofill:focus {
    background: var(--color-mainDark);
    box-shadow: 0 0 0 30px var(--color-mainDark) inset !important;
    -webkit-box-shadow: 0 0 0 30px var(--color-mainDark) inset !important;
    color: var(--color-white) !important;
    -webkit-text-fill-color: var(--color-white) !important;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Error = styled.span`
  color: #d92929;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const Button = styled.button`
  padding: 0 2rem;
  height: 4rem;
  margin-top: 2rem;
  border-radius: 2rem;

  background: var(--color-mainLighter);
  color: var(--color-white);
  font-size: 1.4rem;
  letter-spacing: 1.1px;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  transition: all 0.2s;

  &:hover {
    background: var(--color-mainLight);
  }

  &:disabled {
    background: #333;
    cursor: not-allowed;
  }
`;
