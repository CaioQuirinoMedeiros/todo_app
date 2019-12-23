import React from "react";
import { useSelector, useDispatch } from "react-redux";

import VerifyEmailActions from "../../../store/modules/verifyEmail/reducer";

import Button from "../../../utils/button";

import { Container, Form, Title, SubTitle } from "../styles";

function VerifyEmail() {
  const sending = useSelector(({ verifyEmail }) => verifyEmail.sending);

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
      </Form>
    </Container>
  );
}

export default VerifyEmail;
