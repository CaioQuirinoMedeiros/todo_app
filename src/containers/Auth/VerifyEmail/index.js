import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../../store/ducks/auth";

import { Container, Form, Title, SubTitle, Button } from "../styles";

const VerifyEmail = ({ loading, error, verifyRequest }) => (
  <Container>
    <Form>
      <Title>Verify your email</Title>
      <SubTitle>Go to your email inbox and please verify your email.</SubTitle>
      <Button type="button" onClick={() => verifyRequest()}>
        {loading ? "Sending email..." : "Re-send verification email"}
      </Button>
      {error && <span>{error}</span>}
    </Form>
  </Container>
);

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
