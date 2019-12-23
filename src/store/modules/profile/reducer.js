import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  updateProfileRequest: ['profile'],
  updateProfileSuccess: null,
  updateProfileFailure: ["error"]
});

export const ProfileTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  updating: false,
  updatingError: ""
});

/**
 * Reducers
 */

export const updateRequest = state => state.merge({ updatingError: null, updating: true });

export const updateSuccess = state => state.merge({ updatingError: null, updating: false });

export const updateFailure = (state, { error }) =>
  state.merge({ updatingError: error, updating: false });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_PROFILE_REQUEST]: updateRequest,
  [Types.UPDATE_PROFILE_SUCCESS]: updateSuccess,
  [Types.UPDATE_PROFILE_FAILURE]: updateFailure
});
