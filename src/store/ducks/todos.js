import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import { statement } from "@babel/template";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  cleanUp: null,
  addTodoRequest: ["todo"],
  addTodoSuccess: null,
  addTodoFailure: ["message"],
  openModal: null,
  closeModal: null
});

export const TodosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  modalOpen: false,
  error: "",
  loading: false
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAN_UP]: state => state.merge({ error: "", loading: false }),
  [Types.ADD_TODO_REQUEST]: state => state.merge({ error: "", loading: true }),
  [Types.ADD_TODO_SUCCESS]: state => state.merge({ error: "", loading: false }),
  [Types.ADD_TODO_FAILURE]: (state, { message }) =>
    state.merge({ error: message, loading: false }),
  [Types.OPEN_MODAL]: state => state.merge({ modalOpen: true }),
  [Types.CLOSE_MODAL]: state => state.merge({ modalOpen: false })
});
