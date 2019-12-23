import React from "react";
import { useSelector, useDispatch } from "react-redux";

import VerifyEmailActions from "../../../store/modules/verifyEmail/reducer";

import Button from "../../../utils/button";

import { Container, Form, Title, SubTitle, Error } from "../styles";

function VerifyEmail() {
  const sending = useSelector(({ verifyEmail }) => verifyEmail.sending);
  const error = useSelector(({ verifyEmail }) => verifyEmail.error);

  const dispatch = useDispatch();

  function handleVerifyEmail() {
    dispatch(VerifyEmailActions.verifyEmailRequest());
  }

  return (
    <Container>
      <Form>
        <Title>Verify your email</Title>
        <SubTitle>
          Go to your email inbox and please verify your email.
        </SubTitle>
        <Button type="button" onClick={handleVerifyEmail}>
          {sending ? "Sending..." : "Re-send verification email"}
        </Button>
        <Error>{error}</Error>
      </Form>
    </Container>
  );
}

export default VerifyEmail;
