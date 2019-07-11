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
  SubTitle,
  Link
} from "../styles";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  password: Yup.string().required("The password is required")
});

class Login extends Component {
  static propTypes = {
    cleanUp: PropTypes.func.isRequired,
    signInRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

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
          onSubmit={({ email, password }) => {
            signInRequest(email, password);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Title>Login into your account</Title>
              <SubTitle>
                Fill in your credentials to login into your account
              </SubTitle>

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

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Loading..." : "Login"}
              </Button>

              <Link to="/recovery">Forgot my password</Link>

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
)(Login);
