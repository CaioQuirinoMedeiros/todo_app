import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../../store/ducks/auth";

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
  password: Yup.string()
    .required("The password is required")
    .min(8, "Your password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does'nt match")
    .required("You need to confirm your password")
});

class SignUp extends Component {
  componentDidMount() {
    const { cleanUp } = this.props;
    cleanUp();
  }

  render() {
    const { signUpRequest, loading, error } = this.props;

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
            signUpRequest(...Object.values(values));
            setSubmitting(false);
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

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Loading..." : "Submit"}
              </Button>
              {error && <span>{error}</span>}
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
