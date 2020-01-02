import { put, select, apply, call } from "redux-saga/effects";

import TodosActions from "./reducer";
import { firestore } from "../../../services/firebase";

export function* getTodosCollection() {
  const collection = yield call([firestore, "collection"], "todos");

  return collection;
}

export function* getTodosDoc() {
  const collection = yield call(getTodosCollection);

  const userId = yield select(state => state.firebase.auth.uid);

  const document = yield call([collection, "doc"], userId);

  return document;
}

export function* getUserTodos() {
  const document = yield call(getTodosDoc);

  const content = yield call([document, "get"]);

  const data = yield call([content, "data"]);

  return data;
}

export function* updateUserTodos(todos) {
  const document = yield call(getTodosDoc);

  yield call([document, "update"], { todos });
}

export function* addTodo({ todo }) {
  const newTodo = {
    todo,
    done: false,
    id: `${new Date().valueOf()}.${Math.ceil(Math.random() * 100000)}`
  };

  try {
    const userId = yield select(({ firebase }) => firebase.auth.uid);

    const document = yield firestore
      .collection("todos")
      .doc(userId)
      .get();

    if (document.exists) {
      yield firestore
        .collection("todos")
        .doc(userId)
        .update({
          todos: [...document.data().todos, newTodo]
        });
    } else {
      yield firestore
        .collection("todos")
        .doc(userId)
        .set({
          todos: [newTodo]
        });
    }

    yield put(TodosActions.addTodoSuccess());
  } catch (err) {
    yield put(TodosActions.addTodoFailure(err.message));
  }
}

export function* getTodos() {
  try {
    const {todos} = yield call(getUserTodos)

    yield put(TodosActions.getTodosSuccess(todos));
  } catch (err) {
    yield put(TodosActions.getTodosFailure(err.message));
  }
}

export function* editTodo({ todo }) {
  try {
    const { todos } = yield call(getUserTodos);

    const newTodos = todos.map(td => (td.id === todo.id ? todo : td));

    yield call(updateUserTodos, newTodos);

    yield put(TodosActions.editTodoSuccess());
  } catch (err) {
    yield put(TodosActions.editTodoFailure(err.message));
  }
}

export function* removeTodo({ id }) {
  try {
    const { todos } = yield call(getUserTodos);

    const newTodos = todos.filter(td => td.id !== id);

    yield call(updateUserTodos, newTodos);

    yield put(TodosActions.removeTodoSuccess());
  } catch (err) {
    yield put(TodosActions.removeTodoFailure(err.message));
  }
}
