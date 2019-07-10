import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addTodoRequest: ["todo"],
  addTodoSuccess: null,
  addTodoFailure: ["message"]
});

export const TodosTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  error: "",
  loading: false
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO_REQUEST]: state => state.merge({ error: "", loading: true }),
  [Types.ADD_TODO_SUCCESS]: state => state.merge({ error: "", loading: false }),
  [Types.ADD_TODO_FAILURE]: (state, { message }) =>
    state.merge({ error: message, loading: false })
});
