import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import ProfileActions from "../../store/modules/profile/reducer";

import DeleteAccount from "../../components/DeleteAccount";
import EditPassword from "../../components/EditPassword";

import { Container, Form, Input, Title, Button } from "../../styles/components";

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
    lastName: Yup.string()
    .required("Your name is required")
    .min(3, "Too short")
    .max(25, "Too long"),
});

function Profile() {
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

            <Button disabled={!isValid} type="submit">
              Update
            </Button>

            <Button type="button" onClick={() => alert("opa")}>
              Edit password
            </Button>

            <Button type="button" red onClick={() => alert("opa")}>
              Delete my account
            </Button>
          </Form>
        )}
      </Formik>
      {false && <DeleteAccount />}
      {false && <EditPassword />}
    </Container>
  );
}

export default Profile;
