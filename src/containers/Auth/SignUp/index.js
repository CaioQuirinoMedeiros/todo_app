import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../utils/button";

import {
  Container,
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle
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
  static propTypes = {
    cleanUp: PropTypes.func.isRequired,
    signUpRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

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
          onSubmit={({ firstName, lastName, email, password }) => {
            signUpRequest(firstName, lastName, email, password);
          }}
        >
          {({ isValid }) => (
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
              <ErrorWrapper>
                <ErrorMessage name="firstName" component={Error} />
              </ErrorWrapper>

              <Input type="text" name="lastName" placeholder="Your last name" />
              <ErrorWrapper>
                <ErrorMessage name="lastName" component={Error} />
              </ErrorWrapper>

              <Input type="email" name="email" placeholder="Your email" />
              <ErrorWrapper>
                <ErrorMessage name="email" component={Error} />
              </ErrorWrapper>

              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorWrapper>
                <ErrorMessage name="password" component={Error} />
              </ErrorWrapper>

              <Input
                type="password"
                name="confirmPassword"
                placeholder="Re-type your password"
              />
              <ErrorWrapper>
                <ErrorMessage name="confirmPassword" component={Error} />
              </ErrorWrapper>

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Loading..." : "Submit"}
              </Button>
              <ErrorWrapper>
                {error && <Error center>{error}</Error>}
              </ErrorWrapper>
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
