import { put, apply } from "redux-saga/effects";

import VerifyEmailActions from "./reducer";

export function* sendVerificationEmail(firebase) {
  try {
    const auth = yield apply(firebase, firebase.auth);

    const user = auth.currentUser;

    yield apply(user, user.sendEmailVerification)

    yield put(VerifyEmailActions.verifyEmailSuccess())
  } catch (err) {
    console.error(err);
    yield put(VerifyEmailActions.verifyEmailFailure(err.message))
  }
}
