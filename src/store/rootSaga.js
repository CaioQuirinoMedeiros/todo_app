import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "./modules/auth/reducer";
import { VerifyEmailTypes } from "./modules/verifyEmail/reducer";
import { TodosTypes } from "./modules/todos/reducer";

import { signUp, signIn, signOut } from "./modules/auth/sagas";
import { sendVerificationEmail } from "./modules/verifyEmail/sagas";
import { addTodo, getTodos, editTodo, removeTodo } from "./modules/todos/sagas";

export default function* rootSaga(firebase) {
  yield all([
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp, firebase),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn, firebase),
    takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut, firebase),
    takeLatest(AuthTypes.SIGN_UP_SUCCESS, sendVerificationEmail, firebase),
    
    takeLatest(VerifyEmailTypes.VERIFY_EMAIL_REQUEST, sendVerificationEmail, firebase),

    takeLatest(TodosTypes.ADD_TODO_REQUEST, addTodo, firebase),
    takeLatest(TodosTypes.GET_TODOS_REQUEST, getTodos, firebase),
    takeLatest(TodosTypes.EDIT_TODO_REQUEST, editTodo, firebase),
    takeLatest(TodosTypes.REMOVE_TODO_REQUEST, removeTodo, firebase)
  ]);
}
