import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Container,
  Form,
  Input,
  Error,
  Title,
  SubTitle,
  Button
} from "../styles";

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
  password: Yup.string().required("The password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does'nt match")
    .required("You need to confirm your password")
});

class SignUp extends Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            console.log(setSubmitting);
            setSubmitting(false);
            return;
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Title>Sign up for an account</Title>
              <SubTitle>
                Fill in yout details to register your new account
              </SubTitle>
              <Input
                type="text"
                name="firstName"
                placeholder="Your first name"
              />
              <ErrorMessage name="firstName" component={Error} />

              <Input type="text" name="lastName" placeholder="Your last name" />
              <ErrorMessage name="lastName" component={Error} />

              <Input type="email" name="email" placeholder="Your email" />
              <ErrorMessage name="email" component={Error} />

              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage name="password" component={Error} />

              <Input
                type="password"
                name="confirmPassword"
                placeholder="Re-type your password"
              />
              <ErrorMessage name="confirmPassword" component={Error} />

              <Button disabled={!isValid} type="submit">
                {isSubmitting ? "Loading" : "Send"}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default SignUp;
