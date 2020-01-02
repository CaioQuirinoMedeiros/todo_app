import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import DeleteAccountActions from "../../store/modules/deleteAccount/reducer";

import Modal from "../../components/Modal";

import { Form, Input, Title, SubTitle, Button } from "../../styles/components";

const deleteAccountSchema = Yup.object().shape({
  password: Yup.string().required("The password is required")
});

function DeleteAccount({ close }) {
  const loading = useSelector(({ deleteAccount }) => deleteAccount.loading);

  const dispatch = useDispatch();

  function handleDeleteAccount({ password }) {
    dispatch(DeleteAccountActions.deleteAccountRequest(password));
  }

  return (
    <Modal close={close}>
      <Formik
        validationSchema={deleteAccountSchema}
        onSubmit={handleDeleteAccount}
      >
        {({ isValid, errors }) => (
          <Form>
            <Title>Delete account</Title>
            <SubTitle>Type your password to delete your account</SubTitle>

            <Input
              type="password"
              name="password"
              placeholder="Your password"
              error={errors.password}
            />

            <Button disabled={!isValid || loading} red type="submit">
              {loading ? "Deleting account..." : "Delete"}
            </Button>
            <Button type="submit" onClick={close}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default DeleteAccount;
