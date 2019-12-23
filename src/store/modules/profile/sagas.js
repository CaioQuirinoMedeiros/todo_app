import { put, apply } from "redux-saga/effects";

import ProfileActions from "./reducer";

export function* updateProfile(firebase, { profile }) {
  try {
    yield apply(firebase, firebase.updateProfile, [profile]);

    yield put(ProfileActions.updateProfileSuccess());
  } catch (err) {
    console.error(err);
    yield put(ProfileActions.updateProfileFailure(err.message));
  }
}
