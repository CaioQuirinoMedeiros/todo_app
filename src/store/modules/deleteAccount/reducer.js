import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  deleteAccountRequest: ['password'],
  deleteAccountSuccess: null,
  deleteAccountFailure: ["error"]
});

export const DeleteAccountTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  deleting: false,
  error: ""
});

/**
 * Reducers
 */

export const request = state => state.merge({ error: null, deleting: true });

export const success = state => state.merge({ error: null, deleting: false });

export const failure = (state, { error }) =>
  state.merge({ error, deleting: false });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.DELETE_ACCOUNT_REQUEST]: request,
  [Types.DELETE_ACCOUNT_SUCCESS]: success,
  [Types.DELETE_ACCOUNT_FAILURE]: failure
});
