import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import AuthActions from "../../../store/modules/auth/reducer";

import Button from "../../../utils/button";

import { Container, Form, Input, Title, SubTitle } from "../styles";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is Required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Your last name is Required")
    .min(3, "Too short")
    .max(25, "Too long"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  password: Yup.string()
    .required("The password is required")
    .min(8, "Your password must be at least 8 characters")
});

function SignUp() {
  const loading = useSelector(({ auth }) => auth.loading);

  const dispatch = useDispatch();

  function handleSignUp(data) {
    dispatch(AuthActions.signUpRequest(data));
  }

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSignUp}
      >
        {({ isValid, errors }) => (
          <Form>
            <Title>Sign up for an account</Title>

            <SubTitle>
              Fill in yout details to register your new account
            </SubTitle>

            <Input
              type="text"
              name="firstName"
              placeholder="Your first name"
              error={errors.firstName}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Your last name"
              error={errors.lastName}
            />

            <Input
              type="email"
              name="email"
              placeholder="Your email"
              error={errors.email}
            />

            <Input
              type="password"
              name="password"
              placeholder="Your password"
              error={errors.password}
            />

            <Button disabled={!isValid || loading} type="submit">
              {loading ? "Loading..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignUp;
