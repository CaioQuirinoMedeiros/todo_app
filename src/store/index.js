import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import firebase from "../utils/firebase";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";

import reducers from "./ducks";
import sagas from "./sagas";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  reducers,
  composeEnhancers(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(sagas);

export default store;
