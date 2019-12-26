import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
