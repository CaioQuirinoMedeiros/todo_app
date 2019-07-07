import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],
  signInFailure: [],
  signOut: null,
  signUpRequest: ["name", "email", "password"]
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
  loading: false
});

/**
 * Reducers
 */
const success = (state, { token }) =>
  state.merge({ signedIn: true, token, loading: false });

const failure = state => state.merge({ loading: false });

const logout = state => state.merge({ signedIn: false, token: null });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
  [Types.SIGN_OUT]: logout
});
