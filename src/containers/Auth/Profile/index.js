import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { bindActionCreators } from "redux";
import * as Yup from "yup";
import PropTypes from "prop-types";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../utils/button";
import DeleteAccount from "../../../components/DeleteAccount";
import EditPassword from "../../../components/EditPassword";

import {
  Container,
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle
} from "../styles";

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is Required")
    .min(3, "Too short")
    .max(25, "Too long"),
  lastName: Yup.string()
    .required("Your last name is Required")
    .min(3, "Too short")
    .max(25, "Too long"),
  email: Yup.string()
    .email("Invalid email")
    .required("The email is required")
});

const Profile = ({
  firebase,
  message,
  loading,
  profileEditRequest,
  deleteAccount,
  deleteAccountOpen,
  editPassword,
  editPasswordOpen,
  cleanUp
}) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return firebase.profile.isLoaded ? (
    <Container>
      <Formik
        initialValues={{
          firstName: firebase.profile.firstName,
          lastName: firebase.profile.lastName,
          email: firebase.auth.email
        }}
        validationSchema={profileSchema}
        onSubmit={(values, { setSubmitting }) => {
          profileEditRequest(...Object.values(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Title>Edit your profile</Title>

            <SubTitle>Here you can edit your profile</SubTitle>

            <Input type="text" name="firstName" placeholder="Your first name" />
            <ErrorWrapper>
              <ErrorMessage name="firstName" component={Error} />
            </ErrorWrapper>

            <Input type="text" name="lastName" placeholder="Your last name" />
            <ErrorWrapper>
              <ErrorMessage name="lastName" component={Error} />
            </ErrorWrapper>

            <Input type="email" name="email" placeholder="Your email" />
            <ErrorWrapper>
              <ErrorMessage name="email" component={Error} />
            </ErrorWrapper>

            <Button disabled={!isValid || loading} type="submit" marginBottom>
              {loading ? "Updating profile..." : "Submit"}
            </Button>

            <Button type="button" onClick={() => editPasswordOpen()}>
              Edit password
            </Button>

            <Button type="button" red onClick={() => deleteAccountOpen()}>
              Delete my account
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
      {deleteAccount.open && <DeleteAccount />}
      {editPassword.open && <EditPassword />}
    </Container>
  ) : null;
};

Profile.propTypes = {
  firebase: PropTypes.shape({
    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    auth: PropTypes.shape({
      email: PropTypes.string
    })
  }).isRequired,
  message: PropTypes.shape({
    type: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  profileEditRequest: PropTypes.func.isRequired,
  deleteAccount: PropTypes.shape({
    open: PropTypes.bool
  }).isRequired,
  deleteAccountOpen: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth, firebase }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  message: auth.profileEdit.message,
  deleteAccount: auth.deleteAccount,
  editPassword: auth.editPassword
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
