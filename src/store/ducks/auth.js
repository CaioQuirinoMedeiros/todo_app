import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: null,
  signUpRequest: [
    "firstName",
    "lastName",
    "email",
    "password",
    "passwordConfirmation"
  ],
  signFailure: ["message"],
  signOut: null
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
const success = (state, { id }) =>
  state.merge({ signedIn: true, id, loading: false });

const failure = (state, { message }) =>
  state.merge({ loading: false, error: message });

const logout = state => state.merge({ signedIn: false, token: null });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_UP_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_FAILURE]: failure,
  [Types.SIGN_OUT]: logout
});
