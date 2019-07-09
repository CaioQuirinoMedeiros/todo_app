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
    yield firebase.auth().signInWithEmailAndPassword(email, password);

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

export function* recoverPassword({ getFirebase }, { email }) {
  const firebase = getFirebase();

  try {
    yield firebase.auth().sendPasswordResetEmail(email);

    yield put(AuthActions.recoverySuccess());
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.recoveryFailure(
        err.message || "Couldn't send recovery password email"
      )
    );
  }
}

export function* editProfile(
  { getFirebase, getFirestore },
  { firstName, lastName, email, password }
) {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const user = yield firebase.auth().currentUser;

    console.log("user novo: ", user);

    if (email !== user.email) {
      yield user.updateEmail(email);
      console.log("TROCANDO EMAIL");
    }

    yield firestore
      .collection("users")
      .doc(user.uid)
      .set({
        firstName,
        lastName
      });

    if (password.length) {
      yield user.updatePassword(password);
      console.log("TROCANDO password");
    }

    console.log("user novo: ", user);

    yield put(AuthActions.profileEditSuccess());
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.profileEditFailure(err.message || "Something went wrong...")
    );
  }
}
