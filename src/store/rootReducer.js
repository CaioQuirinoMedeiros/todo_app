import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";
import { firestoreReducer as firestore } from "redux-firestore";

import { reducer as auth } from "./modules/auth/reducer";
import { reducer as verifyEmail } from "./modules/verifyEmail/reducer";
import { reducer as todos } from "./modules/todos/reducer";

export default combineReducers({
  auth,
  verifyEmail,
  todos,
  firebase,
  firestore
});
