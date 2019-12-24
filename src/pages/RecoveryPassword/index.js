import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import PasswordActions from "../../store/modules/password/reducer";

import { Container, Form, Title, SubTitle, Input, Button } from "../../styles/components";

const RecoveryPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Type in your e-mail")
});

function RecoveryPassword() {
  const recovering = useSelector(({ password }) => password.recovering);

  const dispatch = useDispatch();

  function handleRecoveryPassword({ email }) {
    dispatch(PasswordActions.recoverPasswordRequest(email));
  }

  return (
    <Container>
      <Formik
        validationSchema={RecoveryPasswordSchema}
        onSubmit={handleRecoveryPassword}
      >
        {({ isValid, errors }) => (
          <Form>
            <Title>Recover your password</Title>
            <SubTitle>Type in your e-mail to recover your password.</SubTitle>

            <Input
              type="email"
              name="email"
              placeholder="Your email"
              error={errors.email}
            />

            <Button disabled={!isValid || recovering} type="submit">
              {recovering ? "Sending recovery e-mail..." : "Send"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default RecoveryPassword;
