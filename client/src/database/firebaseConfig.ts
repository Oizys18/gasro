import firebase from "firebase/app";
import "firebase/analytics";
let config = {
  apiKey: "AIzaSyBfA6g-qf_nGS5S-yuAF0694G-8tgaoSkw",
  authDomain: "gasro-4f24b.firebaseapp.com",
  databaseURL: "https://gasro-4f24b-default-rtdb.firebaseio.com",
  projectId: "gasro-4f24b",
  storageBucket: "gasro-4f24b.appspot.com",
  messagingSenderId: "947164128059",
  appId: "1:947164128059:web:688d3367a2f12c0e9f0d1e",
  measurementId: "G-4NQQSYDGTF",
};

firebase.initializeApp(config);
const analytics = firebase.analytics();
export default firebase;
