import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "todos-auth-552a2.firebaseapp.com",
  databaseURL: "https://todos-auth-552a2.firebaseio.com",
  projectId: "todos-auth-552a2",
  storageBucket: "todos-auth-552a2.appspot.com",
  messagingSenderId: "717287994666",
  appId: "1:717287994666:web:0b5f159f31e41fad"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
