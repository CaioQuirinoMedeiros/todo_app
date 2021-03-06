import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";
import { firestoreReducer as firestore } from "redux-firestore";

import { reducer as auth } from "./modules/auth/reducer";
import { reducer as profile } from "./modules/profile/reducer";
import { reducer as verifyEmail } from "./modules/verifyEmail/reducer";
import { reducer as deleteAccount } from "./modules/deleteAccount/reducer";
import { reducer as password } from "./modules/password/reducer";
import { reducer as todos } from "./modules/todos/reducer";

export default combineReducers({
  auth,
  profile,
  verifyEmail,
  deleteAccount,
  password,
  todos,
  firebase,
  firestore
});
