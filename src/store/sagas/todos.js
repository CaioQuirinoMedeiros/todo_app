import { call, put, select } from "redux-saga/effects";

import TodosActions from "../ducks/todos";

export function* addTodo({ getFirebase, getFirestore }, { todo }) {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const newTodo = {
    todo,
    id: `${new Date().valueOf()}.${Math.ceil(Math.random() * 100000)}`,
    done: false
  };

  try {
    const userId = yield select(state => state.firebase.auth.uid);

    const response = yield firestore
      .collection("todos")
      .doc(userId)
      .get();

    if (response.exists) {
      yield firestore
        .collection("todos")
        .doc(userId)
        .update({
          todos: [...response.data().todos, newTodo]
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
    yield put(TodosActions.closeModal());
  } catch (err) {
    console.log(err);
    yield put(
      TodosActions.addTodoFailure(err.message || "Oops, something went wrong")
    );
  }
}
