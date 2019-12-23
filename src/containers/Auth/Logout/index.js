import React from "react";
import { useDispatch } from "react-redux";

import AuthActions from "../../../store/ducks/auth";

import Confirmation from "../../../modals/Confirmation";

function Logout ({ history })  {
  const dispatch = useDispatch()

  function handleSignOut() {
    dispatch(AuthActions.signOutRequest())
  }

  return (
  <Confirmation
    close={() =>  history.goBack() }
    confirm={handleSignOut}
    message="Logout from your account"
  />
)}

export default Logout
