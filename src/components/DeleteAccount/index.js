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

const deleteAccountSchema = Yup.object().shape({
  password: Yup.string().required("The password is required")
});

class DeleteAccount extends Component {
  static propTypes = {
    cleanUp: PropTypes.func.isRequired,
    deleteAccountRequest: PropTypes.func.isRequired,
    deleteAccountClose: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { cleanUp } = this.props;
    cleanUp();
  }

  render() {
    const {
      deleteAccountRequest,
      deleteAccountClose,
      loading,
      error
    } = this.props;

    return (
      <Modal closeModal={deleteAccountClose}>
        <Formik
          validationSchema={deleteAccountSchema}
          onSubmit={({ password }) => {
            deleteAccountRequest(password);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Title>Delete account</Title>
              <SubTitle>Type your password to delete your account</SubTitle>

              <Input
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorWrapper>
                <ErrorMessage name="password" component={Error} />
              </ErrorWrapper>

              <Button disabled={!isValid || loading} red type="submit">
                {loading ? "Deleting account..." : "Delete"}
              </Button>
              <Button type="submit" onClick={() => deleteAccountClose()}>
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
  loading: auth.deleteAccount.loading,
  error: auth.deleteAccount.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAccount);
