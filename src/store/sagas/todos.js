import { put, select } from "redux-saga/effects";

import TodosActions from "../ducks/todos";

export function* addTodo({ getFirestore }, { todo }) {
  const firestore = getFirestore();

  const newTodo = {
    todo,
    id: `${new Date().valueOf()}.${Math.ceil(Math.random() * 100000)}`,
    done: false
  };

  try {
    const userId = yield select(state => state.firebase.auth.uid);

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
    yield put(TodosActions.getTodosRequest());
  } catch (err) {
    console.error(err);
    yield put(
      TodosActions.addTodoFailure(err.message || "Oops, something went wrong")
    );
  }
}

export function* getTodos({ getFirestore }) {
  const firestore = getFirestore();

  try {
    const userId = yield select(state => state.firebase.auth.uid);

    const document = yield firestore
      .collection("todos")
      .doc(userId)
      .get();

    let todos = [];

    if (document.exists) {
      todos = document.data().todos;
    }

    yield put(TodosActions.getTodosSuccess(todos));
  } catch (err) {
    console.error(err);
    yield put(
      TodosActions.getTodosFailure(err.message || "Couldn't get your todos")
    );
  }
}

export function* editTodo({ getFirestore }, { todo }) {
  const firestore = getFirestore();
  const userId = yield select(state => state.firebase.auth.uid);

  try {
    const document = yield firestore
      .collection("todos")
      .doc(userId)
      .get();

    const todos = document.data().todos;

    yield firestore
      .collection("todos")
      .doc(userId)
      .update({ todos: todos.map(td => (td.id === todo.id ? todo : td)) });

    yield put(TodosActions.editTodoSuccess());
  } catch (err) {
    console.error(err);
    yield put(
      TodosActions.editTodoFailure(err.message || "Erro updating todo")
    );
  } finally {
    yield put(TodosActions.getTodosRequest());
  }
}

export function* removeTodo({ getFirestore }, { id }) {
  const firestore = getFirestore();
  const userId = yield select(state => state.firebase.auth.uid);

  try {
    const document = yield firestore
      .collection("todos")
      .doc(userId)
      .get();

    const todos = document.data().todos;

    yield firestore
      .collection("todos")
      .doc(userId)
      .update({ todos: todos.filter(td => td.id !== id) });

    yield put(TodosActions.removeTodoSuccess());
  } catch (err) {
    console.error(err);
    yield put(
      TodosActions.removeTodoFailure(err.message || "Erro removing todo")
    );
  } finally {
    yield put(TodosActions.getTodosRequest());
  }
}
