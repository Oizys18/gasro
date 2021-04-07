import firebase from "./firebaseConfig";
import "firebase/database";

const databaseRef = firebase.database().ref();
export const noticeRef = databaseRef.child("notice");
