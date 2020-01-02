import { put, call } from "redux-saga/effects";

import { firestore } from "../../../services/firebase";

import { getTodosDoc } from "../todos/sagas";
import DeleteAccountActions from "./reducer";

export function* deleteAccount(firebase, { password }) {
  try {
    const auth = yield call([firebase, "auth"]);

    const currentUser = auth.currentUser;

    yield call(
      [auth, "signInWithEmailAndPassword"],
      currentUser.email,
      password
    );

    const users = yield call([firestore, "collection"], "users");

    const user = yield call([users, "doc"], currentUser.uid);

    const todosDoc = yield call(getTodosDoc);

    yield call([user, "delete"]);

    yield call([todosDoc, "delete"]);

    yield call([currentUser, "delete"]);

    yield put(DeleteAccountActions.deleteAccountSuccess());
  } catch (err) {
    yield put(DeleteAccountActions.deleteAccountFailure(err.message));
  }
}
