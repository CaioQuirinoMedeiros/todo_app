import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import ProfileActions from "../../store/modules/profile/reducer";

import DeleteAccount from "../../modals/DeleteAccount";
import UpdatePassword from "../../modals/UpdatePassword";

import { Container, Form, Input, Title, Button } from "../../styles/components";

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Your name is required")
    .min(3, "Too short")
    .max(25, "Too long")
});

function Profile() {
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [updatePasswordOpen, setUpdatePasswordOpen] = useState(false);

  const updating = useSelector(({ profile }) => profile.updating);
  const profile = useSelector(({ firebase }) => firebase.profile);

  const dispatch = useDispatch();

  function handleUpdateProfile(profile) {
    dispatch(ProfileActions.updateProfileRequest(profile));
  }

  const { isLoaded, firstName, lastName } = profile;

  if (!isLoaded) return null;

  return (
    <Container>
      <Formik
        initialValues={{ firstName, lastName }}
        validationSchema={profileSchema}
        onSubmit={handleUpdateProfile}
      >
        {({ isValid, errors }) => (
          <Form>
            <Title>Edit your profile</Title>

            <Input
              type="text"
              name="firstName"
              placeholder="Your first name"
              error={errors.firstName}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Your last name"
              error={errors.lastName}
            />

            <Button disabled={!isValid || updating} type="submit">
              {updating ? "Updating..." : "Update"}
            </Button>

            <Button type="button" onClick={() => setUpdatePasswordOpen(true)}>
              Edit password
            </Button>

            <Button
              type="button"
              red
              onClick={() => setDeleteAccountOpen(true)}
            >
              Delete my account
            </Button>
          </Form>
        )}
      </Formik>
      {deleteAccountOpen && (
        <DeleteAccount close={() => setDeleteAccountOpen(false)} />
      )}
      {updatePasswordOpen && (
        <UpdatePassword close={() => setUpdatePasswordOpen(false)} />
      )}
    </Container>
  );
}

export default Profile;
