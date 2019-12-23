import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  signInRequest: ["credentials"],
  signInSuccess: null,
  signUpRequest: ["user"],
  signUpSuccess: null,
  signFailure: ["error"],
  signOutRequest: null,
  signOutSuccess: null,
  signOutFailure: null
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  error: "",
  loading: false
});

/**
 * Reducers
 */

export const request = state => state.merge({ error: null, loading: true });

export const success = state => state.merge({ error: null, loading: false });

export const failure = (state, { error }) =>
  state.merge({ error, loading: false });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SIGN_FAILURE]: failure
});
