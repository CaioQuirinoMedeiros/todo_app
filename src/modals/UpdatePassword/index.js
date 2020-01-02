import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import PasswordActions from "../../store/modules/password/reducer";

import Modal from "../../components/Modal";

import { Form, Input, Title, SubTitle, Button } from "../../styles/components";

const editPasswordSchema = Yup.object().shape({
  password: Yup.string().required("The password is required"),
  newPassword: Yup.string()
    .required("The new password is required")
    .min(8, "Your password must be at least 8 characters"),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Password does'nt match")
    .required("You need to confirm your new password")
});

function UpdatePassword({ close, ...rest }) {
  const updating = useSelector(({ password }) => password.updating);

  const dispatch = useDispatch();

  function handleUpdatePassword({ password, newPassword }) {
    dispatch(PasswordActions.updatePasswordRequest(password, newPassword));
  }

  return (
    <Modal close={close} {...rest}>
      <Formik
        validationSchema={editPasswordSchema}
        onSubmit={handleUpdatePassword}
      >
        {({ isValid, errors }) => (
          <Form>
            <Title>Update password</Title>
            <SubTitle>Type your password and the new password</SubTitle>

            <Input
              type="password"
              name="password"
              placeholder="Your password"
              error={errors.password}
            />

            <Input
              type="password"
              name="newPassword"
              placeholder="New password"
              error={errors.newPassword}
            />

            <Input
              type="password"
              name="newPasswordConfirmation"
              placeholder="Re-type new password"
              error={errors.newPasswordConfirmation}
            />

            <Button disabled={!isValid || updating} type="submit">
              {updating ? "Updating password..." : "Submit"}
            </Button>
            <Button type="submit" red onClick={close}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default UpdatePassword;
