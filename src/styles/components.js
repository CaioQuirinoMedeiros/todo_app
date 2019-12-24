import styled from "styled-components";
import { Form as FormikForm, Field } from "formik";
import { Link as RouteLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Form = styled(FormikForm)`
  width: 58rem;
  margin: 0 1rem;
  position: relative;
  padding: 2.5rem 4rem;
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

export const SubTitle = styled.p`
  margin-bottom: 1rem;
  color: var(--color-white);
  font-size: 1.4rem;
  text-align: center;
`;

export const Input = styled(Field)`
  padding: 0 2rem;
  height: 3.8rem;
  margin-top: 0.6rem;
  border-radius: 2rem;

  background: var(--color-mainDark);
  color: var(--color-white);
  font-weight: 400;
  font-size: 1.3rem;

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

export const ErrorWrapper = styled.div`
  min-height: 19px;
  margin-top: 0.4rem;
  display: flex;
`;

export const Error = styled.span`
  width: 100%;
  text-align: ${props => (props.center ? "center" : "left")};
  padding-left: ${props => (props.center ? "0" : "1rem")};
  color: ${props => (props.type === "success" ? "#5fd965" : "#ff6666")};
  font-size: 1.2rem;
`;

export const Link = styled(RouteLink)`
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0.6rem;
  text-align: center;
  opacity: 0.7;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Button = styled.button`
  padding: 0 2rem;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 2rem;
  margin-bottom: ${props => (props.marginBottom ? "2rem" : 0)};

  background: ${props =>
    props.red ? "var(--color-red)" : "var(--color-mainLighter)"};
  opacity: 0.85;
  color: var(--color-white);
  font-size: 1.4rem;
  letter-spacing: 1.1px;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  transition: all 0.2s;

  &:hover {
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
