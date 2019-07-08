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
    console.log(response);

    yield firestore
      .collection("users")
      .doc(response.user.uid)
      .set({
        firstName,
        lastName
      });

    console.log("Aqui 1");

    yield put(AuthActions.signInSuccess());
    console.log("Aqui 2");
  } catch (err) {
    console.log(err);
    yield put(
      AuthActions.signFailure(err.message || "Something went wrong...")
    );
  }
}

export function* signIn({ getFirebase, getFirestore }, { email, password }) {
  const firebase = getFirebase();
  const firestore = getFirestore();

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
