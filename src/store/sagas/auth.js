import { call, put, select } from "redux-saga/effects";
import AuthActions from "../ducks/auth";

export function* signUp(
  { getFirebase, getFirestore },
  { firstName, lastName, email, password }
) {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const response = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const user = firebase.auth().currentUser;

    yield user.sendEmailVerification();

    yield firestore
      .collection("users")
      .doc(response.user.uid)
      .set({
        firstName,
        lastName
      });

    yield put(AuthActions.signInSuccess());
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.signFailure(err.message || "Something went wrong...")
    );
  }
}

export function* signIn({ getFirebase }, { email, password }) {
  const firebase = getFirebase();

  try {
    console.log(email, password);
    const response = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(response);

    yield put(AuthActions.signInSuccess());
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.signFailure(
        err.message || "Login failed, check your credentials"
      )
    );
  }
}

export function* signOut({ getFirebase }) {
  const firebase = getFirebase();
  try {
    yield firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
}

export function* verifyEmail({ getFirebase }) {
  const firebase = getFirebase();

  try {
    const user = firebase.auth().currentUser;

    yield user.sendEmailVerification();

    yield put(AuthActions.verifySuccess());
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.verifyFailure(err.message || "Couldn't send the email")
    );
  }
}
