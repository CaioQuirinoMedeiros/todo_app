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
  verifySuccess: ["email"],
  verifyFailure: ["message"],
  recoveryRequest: ["email"],
  recoverySuccess: null,
  recoveryFailure: ["message"],
  profileEditRequest: ["firstName", "lastName", "email"],
  profileEditSuccess: null,
  profileEditFailure: ["message"],
  deleteAccountOpen: null,
  deleteAccountClose: null,
  deleteAccountRequest: ["password"],
  deleteAccountSuccess: null,
  deleteAccountFailure: ["message"],
  editPasswordOpen: null,
  editPasswordClose: null,
  editPasswordRequest: ["password", "newPassword"],
  editPasswordSuccess: null,
  editPasswordFailure: ["message"]
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
    loading: false
  },
  deleteAccount: {
    open: false,
    loading: false,
    error: ""
  },
  editPassword: {
    open: false,
    loading: false,
    error: ""
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
      verifyEmail: { loading: false, message: { type: null, content: "" } },
      recoveryPassword: {
        loading: false,
        message: { type: null, content: "" }
      },
      profileEdit: { loading: false, message: { type: null, content: "" } },
      deleteAccount: { ...state.deleteAccount, loading: false, error: "" },
      editPassword: { ...state.editPassword, loading: false, error: "" }
    }),
  [Types.SIGN_FAILURE]: (state, { message }) =>
    state.merge({ loading: false, error: message }),
  [Types.VERIFY_REQUEST]: state =>
    state.merge({
      verifyEmail: { message: { type: null, content: "" }, loading: true }
    }),
  [Types.VERIFY_SUCCESS]: (state, { email }) =>
    state.merge({
      verifyEmail: {
        loading: false,
        message: {
          type: "success",
          content: `Email was successfully sent to ${email}`
        }
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
  [Types.DELETE_ACCOUNT_OPEN]: state =>
    state.merge({
      deleteAccount: { ...state.deleteAccount, open: true }
    }),
  [Types.DELETE_ACCOUNT_CLOSE]: state =>
    state.merge({
      deleteAccount: { ...state.deleteAccount, open: false }
    }),
  [Types.DELETE_ACCOUNT_REQUEST]: state =>
    state.merge({
      deleteAccount: {
        ...state.deleteAccount,
        loading: true,
        error: ""
      }
    }),
  [Types.DELETE_ACCOUNT_SUCCESS]: state =>
    state.merge({
      deleteAccount: {
        open: false,
        loading: false,
        error: ""
      }
    }),
  [Types.DELETE_ACCOUNT_FAILURE]: (state, { message }) =>
    state.merge({
      deleteAccount: {
        ...state.deleteAccount,
        loading: false,
        error: message
      }
    }),
  [Types.EDIT_PASSWORD_OPEN]: state =>
    state.merge({
      editPassword: { ...state.editPassword, open: true }
    }),
  [Types.EDIT_PASSWORD_CLOSE]: state =>
    state.merge({
      editPassword: { ...state.editPassword, open: false }
    }),
  [Types.EDIT_PASSWORD_REQUEST]: state =>
    state.merge({
      editPassword: {
        ...state.editPassword,
        loading: true,
        error: ""
      }
    }),
  [Types.EDIT_PASSWORD_SUCCESS]: state =>
    state.merge({
      profileEdit: {
        loading: false,
        message: {
          type: "success",
          content: "Your password was successfully updated!"
        }
      }
    }),
  [Types.EDIT_PASSWORD_FAILURE]: (state, { message }) =>
    state.merge({
      editPassword: {
        ...state.editPassword,
        loading: false,
        error: message
      }
    })
});
