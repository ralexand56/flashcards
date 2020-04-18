import * as firebase from "firebase/app";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyAJ5pwxN5Q0qnM43USLSDudRXqfCIJmZiU",
  authDomain: "trans-tutorial.firebaseapp.com",
  databaseURL: "https://trans-tutorial.firebaseio.com",
  projectId: "trans-tutorial",
  storageBucket: "trans-tutorial.appspot.com",
  messagingSenderId: "104003851290",
  appId: "1:104003851290:web:ae45a7de0eaeb40162ada3",
  measurementId: "G-CZFTR7RCR0",
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
