import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AuthActions from "../../../store/ducks/auth";

import Confirmation from "../../../components/Confirmation";

const Logout = ({ signOut, history }) => (
  <Confirmation
    close={() => {
      return history.goBack();
    }}
    confirm={signOut}
    message="Logout from your account"
  />
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Logout);
