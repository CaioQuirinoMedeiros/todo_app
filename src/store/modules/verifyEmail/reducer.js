import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  verifyEmailRequest: null,
  verifyEmailSuccess: null,
  verifyEmailFailure: ["error"]
});

export const VerifyEmailTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  sending: false,
  error: ""
});

/**
 * Reducers
 */

export const request = state => state.merge({ error: null, sending: true });

export const success = state => state.merge({ error: null, sending: false });

export const failure = (state, { error }) =>
  state.merge({ error, sending: false });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.VERIFY_EMAIL_REQUEST]: request,
  [Types.VERIFY_EMAIL_SUCCESS]: success,
  [Types.VERIFY_EMAIL_FAILURE]: failure
});
