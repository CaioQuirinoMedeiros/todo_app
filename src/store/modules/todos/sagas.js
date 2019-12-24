import { put } from "redux-saga/effects";

import TodosActions from "./reducer";

export function* addTodo(firebase, { todo }) {
  try {
    console.log("ADDING TODO: ", todo);

    yield put(TodosActions.addTodoSuccess());
  } catch (err) {
    console.error("ERROR ADDING TODO:", err);
    yield put(TodosActions.addTodoFailure(err.message));
  }
}

export function* getTodos() {
  try {
    console.log("GETTING TODOS");

    yield put(TodosActions.getTodosSuccess([]));
  } catch (err) {
    console.error(err);
    yield put(TodosActions.getTodosFailure(err.message));
  }
}

export function* editTodo(firebase, { todo }) {
  try {
    console.log("EDITING TODO: ", todo);

    yield put(TodosActions.editTodoSuccess());
  } catch (err) {
    console.error(err);
    yield put(TodosActions.editTodoFailure(err.message));
  }
}

export function* removeTodo(firebase, { id }) {
  try {
    console.log("REMOVING TODO: ", id);

    yield put(TodosActions.removeTodoSuccess());
  } catch (err) {
    console.error(err);
    yield put(TodosActions.removeTodoFailure(err.message));
  }
}
