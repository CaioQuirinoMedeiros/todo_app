import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { signUp, signIn } from "./auth";

export default function* rootSaga(context) {
  yield all([takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, context)]);
  yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn, context)]);
}
