import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { bindActionCreators } from "redux";
import * as Yup from "yup";

import AuthActions from "../../../store/ducks/auth";

import Button from "../../../utils/button";

import {
  Container,
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle
} from "../styles";
import Confirmation from "../../../components/Confirmation";

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
    .required("The email is required"),
  password: Yup.string().min(8, "Your password must be at least 8 characters"),
  confirmPassword: Yup.string().when("password", {
    is: password => password.length > 0,
    then: Yup.string()
      .required("You need to confirm your password")
      .oneOf([Yup.ref("password"), null], "Password does'nt match")
  })
});

const Profile = ({
  firebase,
  message,
  loading,
  confirmationOpen,
  profileEditOpenConfirmation,
  profileEditCloseConfirmation,
  profileEditRequest,
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
          email: firebase.auth.email,
          password: "",
          confirmPassword: ""
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

            <Input
              type="password"
              name="password"
              placeholder="Your password"
            />
            <ErrorWrapper>
              <ErrorMessage name="password" component={Error} />
            </ErrorWrapper>

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password"
            />
            <ErrorWrapper>
              <ErrorMessage name="confirmPassword" component={Error} />
            </ErrorWrapper>

            <Button disabled={!isValid || loading} type="submit">
              {loading ? "Updating profile..." : "Submit"}
            </Button>

            <Button
              type="button"
              color="#de2121"
              onClick={() => profileEditOpenConfirmation()}
            >
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
      {confirmationOpen && (
        <Confirmation
          close={profileEditCloseConfirmation}
          confirm={() => console.log("EXCLUIU")}
          message="Do you really want to delete your account?"
        />
      )}
    </Container>
  ) : null;
};

const mapStateToProps = ({ auth, firebase }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  message: auth.profileEdit.message,
  confirmationOpen: auth.profileEdit.confirmationOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
