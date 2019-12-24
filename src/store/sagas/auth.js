import { put } from "redux-saga/effects";
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
    console.error(err);
  }
}

export function* verifyEmail({ getFirebase }) {
  const firebase = getFirebase();

  try {
    const user = firebase.auth().currentUser;

    yield user.sendEmailVerification();

    yield put(AuthActions.verifySuccess(user.email));
  } catch (err) {
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
    console.error(err);
    yield put(
      AuthActions.recoveryFailure(
        err.message || "Couldn't send recovery password email"
      )
    );
  }
}

export function* editProfile(
  { getFirebase, getFirestore },
  { firstName, lastName, email }
) {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const user = yield firebase.auth().currentUser;

    if (email !== user.email) {
      yield user.updateEmail(email);
    }

    yield firestore
      .collection("users")
      .doc(user.uid)
      .set({
        firstName,
        lastName
      });

    yield put(AuthActions.profileEditSuccess());
  } catch (err) {
    console.error(err);
    yield put(
      AuthActions.profileEditFailure(err.message || "Something went wrong...")
    );
  }
}

export function* editPassword({ getFirebase }, { password, newPassword }) {
  const firebase = getFirebase();

  try {
    const user = yield firebase.auth().currentUser;

    yield firebase.auth().signInWithEmailAndPassword(user.email, password);

    yield user.updatePassword(newPassword);

    yield put(AuthActions.editPasswordSuccess());
    yield put(AuthActions.editPasswordClose());
  } catch (err) {
    console.error(err);
    yield put(
      AuthActions.editPasswordFailure(err.message || "Something went wrong...")
    );
  }
}

export function* deleteAccount({ getFirebase, getFirestore }, { password }) {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const user = yield firebase.auth().currentUser;

    yield firebase.auth().signInWithEmailAndPassword(user.email, password);

    yield firestore
      .collection("users")
      .doc(user.uid)
      .delete();

    yield firestore
      .collection("todos")
      .doc(user.uid)
      .delete();

    yield user.delete();

    yield put(AuthActions.deleteAccountSuccess());
  } catch (err) {
    console.error(err);
    yield put(
      AuthActions.deleteAccountFailure(err.message || "Couldn't delete account")
    );
  }
}
