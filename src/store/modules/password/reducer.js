import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  recoverPasswordRequest: ['email'],
  recoverPasswordSuccess: null,
  recoverPasswordFailure: ["error"]
});

export const PasswordTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  recovering: false,
  recoveringError: ""
});

/**
 * Reducers
 */

export const recoveryRequest = state => state.merge({ recoveringError: null, recovering: true });

export const recoverySuccess = state => state.merge({ recoveringError: null, recovering: false });

export const recoveryFailure = (state, { error }) =>
  state.merge({ recoveringError: error, recovering: false });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECOVER_PASSWORD_REQUEST]: recoveryRequest,
  [Types.RECOVER_PASSWORD_SUCCESS]: recoverySuccess,
  [Types.RECOVER_PASSWORD_FAILURE]: recoveryFailure
});
