import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2P-0vgQZHQ1bAd70G2wNvAr2xCG2IBw0",
  authDomain: "disney-7bc51.firebaseapp.com",
  projectId: "disney-7bc51",
  storageBucket: "disney-7bc51.appspot.com",
  messagingSenderId: "994546275144",
  appId: "1:994546275144:web:6f732ffd5952536b6e997d",
  measurementId: "G-CPH3BMP7DP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

//use redux to store user information upon logging in with the pop up.
//the popup gives you the google user object within the console.
//redux allows to save user without user and use it within the front it. Store and retrieve it from the frontend

//npm install react-redux
//npm install npm i @reduxjs/toolkit
