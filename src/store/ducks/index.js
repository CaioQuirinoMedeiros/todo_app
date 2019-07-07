import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";

import { reducer as auth } from "./auth";

export default combineReducers({
  auth,
  firebase
});
