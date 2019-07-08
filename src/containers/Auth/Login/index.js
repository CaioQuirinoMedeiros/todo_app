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

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  password: Yup.string().required("The password is required")
});

class Login extends Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            console.log(setSubmitting);
            setSubmitting(false);
            return;
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Title>Login into your account</Title>
              <SubTitle>
                Fill in yout details to login into your account
              </SubTitle>
              <Input type="email" name="email" placeholder="Your email" />
              <ErrorMessage name="email" component={Error} />
              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage name="password" component={Error} />
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

export default Login;
