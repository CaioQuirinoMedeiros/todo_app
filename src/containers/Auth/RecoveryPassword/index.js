import React from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../../store/ducks/auth";

import {
  Container,
  Form,
  Title,
  SubTitle,
  Input,
  Button,
  Error,
  ErrorWrapper
} from "../styles";

const RecoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Type in your e-mail")
});

const RecoveryPassword = ({ message, loading, recoveryRequest }) => {
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
