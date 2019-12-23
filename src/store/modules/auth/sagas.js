import { put, apply, call } from "redux-saga/effects";

import AuthActions from "./reducer";

export function* signUp(firebase, { user }) {
  const {email, password, firstName, lastName} = user
  try {
    yield apply(firebase, firebase.createUser, [
      { email, password },
      { firstName, lastName }
    ]);

    yield put(AuthActions.signUpSuccess());
  } catch (err) {
    console.error(err);
    yield put(AuthActions.signFailure(err.message));
  }
}

export function* signIn(firebase, { credentials }) {
  const { email, password } = credentials;
  try {
    const auth = yield apply(firebase, firebase.auth);

    yield call([auth, auth.signInWithEmailAndPassword], email, password);

    yield put(AuthActions.signInSuccess());
  } catch (err) {
    console.error(err);
    yield put(AuthActions.signFailure(err.message));
  }
}

export function* signOut(firebase) {
  try {
    const auth = yield apply(firebase, firebase.auth);
    
    yield apply(auth, auth.signOut);
    yield put(AuthActions.signOutSuccess());
  } catch (err) {
    console.error(err);
    yield put(AuthActions.signOutFailure(err.message));
  }
}
