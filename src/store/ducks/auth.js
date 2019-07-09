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
  recoveryFailure: ["message"],
  profileEditRequest: [
    "firstName",
    "lastName",
    "email",
    "password",
    "passwordConfirmation"
  ],
  profileEditSuccess: null,
  profileEditFailure: ["message"],
  profileEditOpenConfirmation: null,
  profileEditCloseConfirmation: null,
  deleteAccountRequest: null,
  deleteAccountFailure: ["message"]
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
  },
  profileEdit: {
    message: {
      type: null,
      content: ""
    },
    loading: false,
    confirmationOpen: false,
    deleteLoading: false
  }
});

/**
 * Reducers
 */

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ error: "", loading: true }),
  [Types.SIGN_UP_REQUEST]: state => state.merge({ error: "", loading: true }),
  [Types.SIGN_IN_SUCCESS]: state => state.merge({ error: "", loading: false }),
  [Types.CLEAN_UP]: state =>
    state.merge({
      error: "",
      verifyEmail: { type: null, message: "" },
      recoveryPassword: { type: null, message: "" },
      profileEdit: { type: null, message: "" }
    }),
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
    }),
  [Types.PROFILE_EDIT_REQUEST]: state =>
    state.merge({
      profileEdit: { message: { type: null, content: "" }, loading: true }
    }),
  [Types.PROFILE_EDIT_SUCCESS]: state =>
    state.merge({
      profileEdit: {
        loading: false,
        message: {
          type: "success",
          content: "Your profile was successfully updated!"
        }
      }
    }),
  [Types.PROFILE_EDIT_FAILURE]: (state, { message }) =>
    state.merge({
      profileEdit: {
        loading: false,
        message: { type: "error", content: message }
      }
    }),
  [Types.PROFILE_EDIT_OPEN_CONFIRMATION]: state =>
    state.merge({
      profileEdit: { ...state.profileEdit, confirmationOpen: true }
    }),
  [Types.PROFILE_EDIT_CLOSE_CONFIRMATION]: state =>
    state.merge({
      profileEdit: { ...state.profileEdit, confirmationOpen: false }
    }),
  [Types.DELETE_ACCOUNT_REQUEST]: state =>
    state.merge({
      profileEdit: {
        ...state.profileEdit,
        deleteLoading: true,
        message: { type: null, content: "" }
      }
    }),
  [Types.DELETE_ACCOUNT_FAILURE]: (state, { message }) =>
    state.merge({
      profileEdit: {
        ...state.profileEdit,
        deleteLoading: false,
        message: { type: "error", content: message }
      }
    })
});
