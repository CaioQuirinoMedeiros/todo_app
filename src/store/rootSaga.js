import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "./modules/auth/reducer";
import { ProfileTypes } from "./modules/profile/reducer";
import { VerifyEmailTypes } from "./modules/verifyEmail/reducer";
import { PasswordTypes } from "./modules/password/reducer";
import { TodosTypes } from "./modules/todos/reducer";
import { DeleteAccountTypes } from "./modules/deleteAccount/reducer";

import { signUp, signIn, signOut } from "./modules/auth/sagas";
import { updateProfile } from "./modules/profile/sagas";
import { sendVerificationEmail } from "./modules/verifyEmail/sagas";
import {
  sendRecoveryPasswordEmail,
  updatePassword
} from "./modules/password/sagas";
import { addTodo, getTodos, editTodo, removeTodo } from "./modules/todos/sagas";
import { deleteAccount } from "./modules/deleteAccount/sagas";

export default function* rootSaga(firebase) {
  yield all([
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, firebase),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn, firebase),
    takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut, firebase),
    takeLatest(AuthTypes.SIGN_UP_SUCCESS, sendVerificationEmail, firebase),

    takeLatest(
      VerifyEmailTypes.VERIFY_EMAIL_REQUEST,
      sendVerificationEmail,
      firebase
    ),

    takeLatest(
      PasswordTypes.RECOVER_PASSWORD_REQUEST,
      sendRecoveryPasswordEmail,
      firebase
    ),
    takeLatest(PasswordTypes.UPDATE_PASSWORD_REQUEST, updatePassword, firebase),

    takeLatest(
      DeleteAccountTypes.DELETE_ACCOUNT_REQUEST,
      deleteAccount,
      firebase
    ),

    takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfile, firebase),

    takeLatest(TodosTypes.ADD_TODO_REQUEST, addTodo),
    takeLatest(TodosTypes.GET_TODOS_REQUEST, getTodos),
    takeLatest(TodosTypes.EDIT_TODO_REQUEST, editTodo),
    takeLatest(TodosTypes.REMOVE_TODO_REQUEST, removeTodo)
  ]);
}
