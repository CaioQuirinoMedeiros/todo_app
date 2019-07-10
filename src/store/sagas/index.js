import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import {
  signUp,
  signIn,
  signOut,
  verifyEmail,
  recoverPassword,
  editProfile,
  deleteAccount
} from "./auth";

import { TodosTypes } from "../ducks/todos";
import { addTodo, getTodos, editTodo, removeTodo } from "./todos";

export default function* rootSaga(context) {
  yield all([
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, context),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn, context),
    takeLatest(AuthTypes.SIGN_OUT, signOut, context),
    takeLatest(AuthTypes.VERIFY_REQUEST, verifyEmail, context),
    takeLatest(AuthTypes.RECOVERY_REQUEST, recoverPassword, context),
    takeLatest(AuthTypes.PROFILE_EDIT_REQUEST, editProfile, context),
    takeLatest(AuthTypes.DELETE_ACCOUNT_REQUEST, deleteAccount, context),

    takeLatest(TodosTypes.ADD_TODO_REQUEST, addTodo, context),
    takeLatest(TodosTypes.GET_TODOS_REQUEST, getTodos, context),
    takeLatest(TodosTypes.EDIT_TODO_REQUEST, editTodo, context),
    takeLatest(TodosTypes.REMOVE_TODO_REQUEST, removeTodo, context)
  ]);
}
