import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDR9YXHTv8ljP5cssmJBuHuHfSBeR81To4",
  authDomain: "resume-builder-c0802.firebaseapp.com",
  projectId: "resume-builder-c0802",
  storageBucket: "resume-builder-c0802.appspot.com",
  messagingSenderId: "845699477242",
  appId: "1:845699477242:web:6f49315325880abe88a343"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;