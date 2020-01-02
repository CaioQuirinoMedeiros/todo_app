import { put, call } from "redux-saga/effects";

import PasswordActions from "./reducer";

export function* sendRecoveryPasswordEmail(firebase, { email }) {
  try {
    const auth = yield call([firebase, "auth"]);

    yield call([auth, "sendPasswordResetEmail"], email);

    yield put(PasswordActions.recoverPasswordSuccess());
  } catch (err) {
    yield put(PasswordActions.recoverPasswordFailure(err.message));
  }
}

export function* updatePassword(firebase, { password, newPassword }) {
  try {
    const auth = yield call([firebase, "auth"]);

    const currentUser = auth.currentUser;

    yield call(
      [auth, "signInWithEmailAndPassword"],
      currentUser.email,
      password
    );

    yield call([auth, "updatePassword"], newPassword);

    yield put(PasswordActions.updatePasswordSuccess());
  } catch (err) {
    yield put(PasswordActions.updatePasswordFailure(err.message));
  }
}
