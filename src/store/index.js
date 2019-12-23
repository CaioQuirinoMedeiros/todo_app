import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import firebase from '../services/firebase'

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga, firebase);

export default store;
