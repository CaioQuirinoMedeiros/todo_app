import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import App from "./App";

import firebase from './services/firebase'
import reactReduxFirebaseConfig from "./config/react-redux-firebase";
import store from "./store";

import theme from "./utils/theme";
import GlobalStyles from "./styles/global";

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <App />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  root
);
