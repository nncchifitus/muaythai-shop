import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbiN5xi6wCZ_oE1-WMr-G5WPgjqC1wXCw",
  authDomain: "muaythai-shop-4592b.firebaseapp.com",
  projectId: "muaythai-shop-4592b",
  storageBucket: "muaythai-shop-4592b.appspot.com",
  messagingSenderId: "827921174462",
  appId: "1:827921174462:web:9e8b1e1ca21f9474c573ef",
  measurementId: "G-QJ68DZH2YQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
