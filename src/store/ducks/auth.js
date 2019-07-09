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
  cleanUp: null,
  signOut: null,
  verifyRequest: null,
  verifySuccess: null,
  verifyFailure: ["message"],
  recoveryRequest: ["email"],
  recoverySuccess: null,
  recoveryFailure: ["message"]
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  error: "",
  loading: false,
  verifyEmail: {
    message: {
      type: null,
      content: ""
    },
    loading: false
  },
  recoveryPassword: {
    message: {
      type: null,
      content: ""
    },
    loading: false
  }
});

/**
 * Reducers
 */

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_UP_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_IN_SUCCESS]: state => state.merge({ loading: false, error: "" }),
  [Types.CLEAN_UP]: state =>
    state.merge({ error: "", verifyEmail: { type: null, message: "" } }),
  [Types.SIGN_FAILURE]: (state, { message }) =>
    state.merge({ loading: false, error: message }),
  [Types.VERIFY_REQUEST]: state =>
    state.merge({
      verifyEmail: { message: { type: null, content: "" }, loading: true }
    }),
  [Types.VERIFY_SUCCESS]: state =>
    state.merge({
      verifyEmail: {
        loading: false,
        message: { type: "success", content: "Email was successfully sent" }
      }
    }),
  [Types.VERIFY_FAILURE]: (state, { message }) =>
    state.merge({
      verifyEmail: {
        loading: false,
        message: { type: "error", content: message }
      }
    }),
  [Types.RECOVERY_REQUEST]: state =>
    state.merge({
      recoveryPassword: { message: { type: null, content: "" }, loading: true }
    }),
  [Types.RECOVERY_SUCCESS]: state =>
    state.merge({
      recoveryPassword: {
        loading: false,
        message: { type: "success", content: "Done! Check your email inbox" }
      }
    }),
  [Types.RECOVERY_FAILURE]: (state, { message }) =>
    state.merge({
      recoveryPassword: {
        loading: false,
        message: { type: "error", content: message }
      }
    })
});
