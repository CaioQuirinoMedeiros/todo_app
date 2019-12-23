import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../store/ducks/auth";

import Button from "../../utils/button";
import Modal from "../Modal";

import {
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle
} from "../../containers/Auth/styles";

const editPasswordSchema = Yup.object().shape({
  password: Yup.string().required("The password is required"),
  newPassword: Yup.string()
    .required("The new password is required")
    .min(8, "Your password must be at least 8 characters"),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Password does'nt match")
    .required("You need to confirm your new password")
});

class EditPassword extends Component {
  static propTypes = {
    cleanUp: PropTypes.func.isRequired,
    editPasswordRequest: PropTypes.func.isRequired,
    editPasswordClose: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { cleanUp } = this.props;
    cleanUp();
  }

  render() {
    const {
      editPasswordRequest,
      editPasswordClose,
      loading,
      error
    } = this.props;

    return (
      <Modal closeModal={editPasswordClose}>
        <Formik
          validationSchema={editPasswordSchema}
          onSubmit={({ password, newPassword }) => {
            editPasswordRequest(password, newPassword);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Title>Update password</Title>
              <SubTitle>Type your password and the new password</SubTitle>

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
                name="newPassword"
                placeholder="New password"
              />
              <ErrorWrapper>
                <ErrorMessage name="newPassword" component={Error} />
              </ErrorWrapper>

              <Input
                type="password"
                name="newPasswordConfirmation"
                placeholder="Re-type new password"
              />
              <ErrorWrapper>
                <ErrorMessage
                  name="newPasswordConfirmation"
                  component={Error}
                />
              </ErrorWrapper>

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Updating password..." : "Submit"}
              </Button>
              <Button type="submit" red onClick={() => editPasswordClose()}>
                Cancel
              </Button>

              <ErrorWrapper>
                {error && <Error center>{error}</Error>}
              </ErrorWrapper>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.editPassword.loading,
  error: auth.editPassword.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPassword);
