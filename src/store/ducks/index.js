import { combineReducers } from "redux";
import { firebaseReducer as firebase } from "react-redux-firebase";

import { reducer as auth } from "./auth";
import { reducer as todos } from "./todos";

export default combineReducers({
  auth,
  todos,
  firebase
});
