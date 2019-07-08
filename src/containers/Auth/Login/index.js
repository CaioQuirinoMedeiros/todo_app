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

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  password: Yup.string().required("The password is required")
});

class Login extends Component {
  componentDidMount() {
    const { cleanUp } = this.props;
    cleanUp();
  }

  render() {
    const { signInRequest, loading, error } = this.props;

    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            signInRequest(...Object.values(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Title>Login into your account</Title>
              <SubTitle>
                Fill in your credentials to login into your account
              </SubTitle>

              <Input type="email" name="email" placeholder="Your email" />
              <ErrorMessage name="email" component={Error} />

              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage name="password" component={Error} />

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Loading..." : "Login"}
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
)(Login);
