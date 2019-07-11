import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  cleanUp: null,
  addTodoRequest: ["todo"],
  addTodoSuccess: null,
  addTodoFailure: ["message"],
  openModal: null,
  closeModal: null,
  getTodosRequest: null,
  getTodosSuccess: ["todos"],
  getTodosFailure: ["message"],
  editTodoRequest: ["todo"],
  editTodoSuccess: null,
  editTodoFailure: ["message"],
  removeTodoRequest: ["id"],
  removeTodoSuccess: null,
  removeTodoFailure: ["message"]
});

export const TodosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  addTodo: {
    open: false,
    error: "",
    loading: false
  },
  data: [],
  todoMessage: {
    type: null,
    content: ""
  },
  loading: false,
  error: ""
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAN_UP]: state =>
    state.merge({
      error: "",
      loading: false,
      editMessage: { type: null, content: "" }
    }),
  [Types.ADD_TODO_REQUEST]: state =>
    state.merge({
      addTodo: { ...state.addTodo, error: "", loading: true },
      todoMessage: { type: "success", content: "" }
    }),
  [Types.ADD_TODO_SUCCESS]: state =>
    state.merge({ addTodo: { error: "", loading: false } }),
  [Types.ADD_TODO_FAILURE]: (state, { message }) =>
    state.merge({ addTodo: { error: message, loading: false } }),
  [Types.OPEN_MODAL]: state =>
    state.merge({ addTodo: { ...state.addTodo, open: true } }),
  [Types.CLOSE_MODAL]: state =>
    state.merge({ addTodo: { ...state.addTodo, open: false } }),
  [Types.GET_TODOS_REQUEST]: state => state.merge({ error: "", loading: true }),
  [Types.GET_TODOS_SUCCESS]: (state, { todos }) =>
    state.merge({ data: todos, error: "", loading: false }),
  [Types.GET_TODOS_FAILURE]: (state, { message }) =>
    state.merge({ error: message, loading: false }),
  [Types.EDIT_TODO_REQUEST]: state =>
    state.merge({ todoMessage: { type: null, content: "" }, loading: true }),
  [Types.EDIT_TODO_SUCCESS]: state =>
    state.merge({ todoMessage: { type: "success", content: "" } }),
  [Types.EDIT_TODO_FAILURE]: (state, { message }) =>
    state.merge({ todoMessage: { type: "error", content: message } }),
  [Types.REMOVE_TODO_REQUEST]: state =>
    state.merge({ todoMessage: { type: null, content: "" }, loading: true }),
  [Types.REMOVE_TODO_SUCCESS]: state =>
    state.merge({ todoMessage: { type: "success", content: "" } }),
  [Types.REMOVE_TODO_FAILURE]: (state, { message }) =>
    state.merge({ todoMessage: { type: "error", content: message } })
});
