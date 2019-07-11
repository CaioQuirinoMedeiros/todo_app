import React, { useEffect } from "react";
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
  ErrorWrapper,
  Error
} from "../styles";

const VerifyEmail = ({ loading, message, verifyRequest, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Container>
      <Form>
        <Title>Verify your email</Title>
        <SubTitle>
          Go to your email inbox and please verify your email.
        </SubTitle>
        <Button type="button" onClick={() => verifyRequest()}>
          {loading ? "Sending email..." : "Re-send verification email"}
        </Button>
        <ErrorWrapper>
          {message.content && (
            <Error center type={message.type}>
              {message.content}
            </Error>
          )}
        </ErrorWrapper>
      </Form>
    </Container>
  );
};

VerifyEmail.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    type: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  verifyRequest: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  message: auth.verifyEmail.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
