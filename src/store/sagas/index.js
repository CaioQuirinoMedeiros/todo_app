import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import {
  signUp,
  signIn,
  signOut,
  verifyEmail,
  recoverPassword,
  editProfile,
  deleteAccount
} from "./auth";

export default function* rootSaga(context) {
  yield all([takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, context)]);
  yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn, context)]);
  yield all([takeLatest(AuthTypes.SIGN_OUT, signOut, context)]);
  yield all([takeLatest(AuthTypes.VERIFY_REQUEST, verifyEmail, context)]);
  yield all([takeLatest(AuthTypes.RECOVERY_REQUEST, recoverPassword, context)]);
  yield all([takeLatest(AuthTypes.PROFILE_EDIT_REQUEST, editProfile, context)]);
  yield all([
    takeLatest(AuthTypes.DELETE_ACCOUNT_REQUEST, deleteAccount, context)
  ]);
}
