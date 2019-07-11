import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../utils/button";

import {
  Container,
  Form,
  Title,
  SubTitle,
  Input,
  Error,
  ErrorWrapper,
  Link
} from "../styles";

const RecoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Type in your e-mail")
});

const RecoveryPassword = ({ message, loading, recoveryRequest, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Container>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={RecoveryPasswordSchema}
        onSubmit={({ email }, { setSubmitting }) => {
          recoveryRequest(email);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Title>Recover your password</Title>
            <SubTitle>Type in your e-mail to recover your password.</SubTitle>

            <Input type="email" name="email" placeholder="Your email" />
            <ErrorWrapper>
              <ErrorMessage name="email" component={Error} />
            </ErrorWrapper>

            <Button disabled={!isValid || loading} type="submit">
              {loading ? "Sending recover e-mail..." : "Send"}
            </Button>

            <Link to="/login">Login</Link>

            <ErrorWrapper>
              {message.content && (
                <Error center type={message.type}>
                  {message.content}
                </Error>
              )}
            </ErrorWrapper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

RecoveryPassword.propTypes = {
  message: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recoveryRequest: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired
};

RecoveryPassword.defaultProps = {
  message: PropTypes.string
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoveryPassword.loading,
  message: auth.recoveryPassword.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoveryPassword);
