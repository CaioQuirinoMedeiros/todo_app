import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addTodoRequest: ["todo"],
  addTodoSuccess: null,
  addTodoFailure: ["error"],
  getTodosRequest: null,
  getTodosSuccess: ["todos"],
  getTodosFailure: ["error"],
  editTodoRequest: ["todo"],
  editTodoSuccess: null,
  editTodoFailure: ["error"],
  removeTodoRequest: ["id"],
  removeTodoSuccess: null,
  removeTodoFailure: ["error"]
});

export const TodosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  fetching: false,
  adding: false,
  editing: false,
  removing: false,
  fetchingError: null,
  addingError: null,
  editingError: null,
  removingError: null,
  subscription: null
});

/* Reducers */

export const getRequest = state =>
  state.merge({ fetching: true, fetchingError: null });

export const getSuccess = (state, { todos }) =>
  state.merge({ data: todos, fetching: false, fetchingError: null });

export const getFailure = (state, { error }) =>
  state.merge({ fetching: false, fetchingError: error });

export const addRequest = state =>
  state.merge({ adding: true, addingError: null });

export const addSuccess = state =>
  state.merge({ adding: false, addingError: null });

export const addFailure = (state, { error }) =>
  state.merge({ adding: false, addingError: error });

export const editRequest = state =>
  state.merge({ editing: true, editingError: null });

export const editSuccess = state =>
  state.merge({ editing: false, editingError: null });

export const editFailure = (state, { error }) =>
  state.merge({ editing: false, editingError: error });

export const removeRequest = state =>
  state.merge({ reomving: true, reomvingError: null });

export const removeSuccess = state =>
  state.merge({ reomving: false, reomvingError: null });

export const removeFailure = (state, { error }) =>
  state.merge({ reomving: false, reomvingError: error });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_REQUEST]: addRequest,
  [Types.ADD_TODO_SUCCESS]: addSuccess,
  [Types.ADD_TODO_FAILURE]: addFailure,
  [Types.GET_TODOS_REQUEST]: getRequest,
  [Types.GET_TODOS_SUCCESS]: getSuccess,
  [Types.GET_TODOS_FAILURE]: getFailure,
  [Types.EDIT_TODO_REQUEST]: editRequest,
  [Types.EDIT_TODO_SUCCESS]: editSuccess,
  [Types.EDIT_TODO_FAILURE]: editFailure,
  [Types.REMOVE_TODO_REQUEST]: removeRequest,
  [Types.REMOVE_TODO_SUCCESS]: removeSuccess,
  [Types.REMOVE_TODO_FAILURE]: removeFailure
});
