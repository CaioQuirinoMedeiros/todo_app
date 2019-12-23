import { put, apply } from "redux-saga/effects";

import PasswordActions from "./reducer";

export function* sendRecoveryPasswordEmail(firebase, {email}) {
  try {
    const auth = yield apply(firebase, firebase.auth);

    yield apply(auth, auth.sendPasswordResetEmail, [email])

    yield put(PasswordActions.recoverPasswordSuccess())
  } catch (err) {
    console.error(err);
    yield put(PasswordActions.recoverPasswordFailure(err.message))
  }
}
