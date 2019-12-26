import { put, select } from 'redux-saga/effects'

import TodosActions from './reducer'
import { firestore } from '../../../services/firebase'


export function * addTodo (firebase, { todo }) {
  const newTodo = {
    todo,
    done: false,
    id: `${new Date().valueOf()}.${Math.ceil(Math.random() * 100000)}`
  }

  try {
    const userId = yield select(({ firebase }) => firebase.auth.uid)

    const document = yield firestore
      .collection('todos')
      .doc(userId)
      .get()

    if (document.exists) {
      yield firestore
        .collection('todos')
        .doc(userId)
        .update({
          todos: [...document.data().todos, newTodo]
        })
    } else {
      yield firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [newTodo]
        })
    }

    yield put(TodosActions.addTodoSuccess())
  } catch (err) {
    console.error('ERROR ADDING TODO:', err)
    yield put(TodosActions.addTodoFailure(err.message))
  }
}

export function * getTodos () {
  try {
    const userId = yield select(state => state.firebase.auth.uid)

    const document = yield firestore
      .collection('todos')
      .doc(userId)
      .get()

    let todos = []

    if (document.exists) {
      todos = document.data().todos
    }

    yield put(TodosActions.getTodosSuccess(todos))
  } catch (err) {
    console.error(err)
    yield put(TodosActions.getTodosFailure(err.message))
  }
}

export function * editTodo (firebase, { todo }) {
  try {
    console.log('EDITING TODO: ', todo)

    yield put(TodosActions.editTodoSuccess())
  } catch (err) {
    console.error(err)
    yield put(TodosActions.editTodoFailure(err.message))
  }
}

export function * removeTodo (firebase, { id }) {
  try {
    console.log('REMOVING TODO: ', id)

    yield put(TodosActions.removeTodoSuccess())
  } catch (err) {
    console.error(err)
    yield put(TodosActions.removeTodoFailure(err.message))
  }
}
