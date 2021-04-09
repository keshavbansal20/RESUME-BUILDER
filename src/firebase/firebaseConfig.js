import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA8wKcwnulYOVjlpXUH1HmlTdR_OT7YbCY",
    authDomain: "resume-builder-9b463.firebaseapp.com",
    projectId: "resume-builder-9b463",
    storageBucket: "resume-builder-9b463.appspot.com",
    messagingSenderId: "161099095587",
    appId: "1:161099095587:web:e852a8a3621b6459be5b96"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default{
    db : firebaseApp.firestore()
}